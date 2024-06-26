#!/usr/bin/env python3
import os
import pdb
from flask import Flask, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS
from config import app, db


from models import db, User, Campaign, Role, Character, Stat, MiscStat, SavingThrow, Skill, Health, Personal, Attack, Feat, Equipment, Other

@app.get('/')
def index():
    return "Hello world"


# user login/auth and creator
@app.post("/api/signup")
def signup():
    try:
        new_user = User(
            username=request.json.get('username'),
            )
        new_user.hashed_password = request.json['password']
        db.session.add(new_user)
        db.session.commit()

       
        session["user_id"] = new_user.id
        return new_user.to_dict(), 201
    except Exception as e:
        return { 'error': str(e) }, 406
    
@app.get("/api/check_session")
def check_session():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.filter(User.id == user_id).first()
        if user:
            return user.to_dict(), 200
        return {'error': 'user not found'}, 404
    return {}, 401


@app.post("/api/login")
def login():
    user = User.query.filter(User.username == request.json['username']).first()
    if user == None:
        return {'error': 'username not found'}, 401
    elif user.authenticate(request.json['password']):
        session['user_id'] = user.id
        return user.to_dict(), 200
    return {'error': 'wrong password'}, 401


@app.delete("/api/logout")
def logout():
    if session.get('user_id') == None:
        return {}, 401
    session['user_id'] = None
    return {}, 204
# this creates character 
@app.post('/api/create_character')
def create_character():
    try:
        data = request.json.get('character', {})
        stats_data = data.pop('stats', [])
        misc_stats_data = data.pop('misc_stats', {})
        saving_throws_data = data.pop('saving_throws', [])
        skills_data = data.pop('skills', [])
        health_data = data.pop('health', [])
        personal_data = data.pop('personal', [])
        attacks_data = data.pop('attacks', [])
        feats_data = data.pop('feats', [])
        other_data = data.pop('other', [])
        equipments_data = data.pop('equipments', [])

        # Retrieve user_id from session
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({'error': 'User is not logged in.'}), 401

        # Ensure user exists
        user = User.query.get(user_id)
        if not user:
            return jsonify({'error': 'User does not exist.'}), 404

        # Create a new character
        new_character = Character(
            name=data.get('name'),
            klass=data.get('klass'),
            level=data.get('level'),
            background=data.get('background'),
            race=data.get('race'),
            xp=data.get('xp'),
            alignment=data.get('alignment')
        )

        db.session.add(new_character)
        db.session.commit()

        # Create a new role to link the user and the character
        new_role = Role(
            user_id=user_id,
            character_id=new_character.id,
            dm=False  # Assuming false if character is being created
        )
        db.session.add(new_role)

        # Handle nested data
        if stats_data:
            new_stat = Stat(character_id=new_character.id, **stats_data[0])
            db.session.add(new_stat)

        if misc_stats_data:
            new_misc_stat = MiscStat(character_id=new_character.id, **misc_stats_data)
            db.session.add(new_misc_stat)

        if saving_throws_data:
            new_saving_throw = SavingThrow(character_id=new_character.id, **saving_throws_data[0])
            db.session.add(new_saving_throw)

        if skills_data:
            new_skill = Skill(character_id=new_character.id, **skills_data[0])
            db.session.add(new_skill)

        if health_data:
            new_health = Health(character_id=new_character.id, **health_data[0])
            db.session.add(new_health)

        if personal_data:
            new_personal = Personal(character_id=new_character.id, **personal_data[0])
            db.session.add(new_personal)

        if attacks_data:
            new_attack = Attack(character_id=new_character.id, **attacks_data[0])
            db.session.add(new_attack)

        if feats_data:
            new_feat = Feat(character_id=new_character.id, **feats_data[0])
            db.session.add(new_feat)

        if other_data:
            new_other = Other(character_id=new_character.id, **other_data[0])
            db.session.add(new_other)

        if equipments_data:
            new_equipment = Equipment(character_id=new_character.id, **equipments_data[0])
            db.session.add(new_equipment)

        db.session.commit()

        return jsonify(new_character.to_dict()), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


# this grabs all of users characters with the inner tables=================
@app.get('/api/characters')
# user id should b from session params
def get_all_char():
    user_id = session.get('user_id')
    user=User.query.get(user_id)
    characters =[character.to_dict() for character in user.characters]
# rules=['-stats', '-misc_stats','-saving_throws','-skills','-health','-personal','-attacks','-feats','-equipments','-other']
    return jsonify({
        'characters': characters
    }), 200


# get one character===================
@app.get('/api/character/<int:character_id>')
def get_one_char(character_id):
    user_id = session.get('user_id')

    user = User.query.get(user_id)
    if user:
        for character in user.characters:
            if character.id == character_id:
                return character.to_dict(), 200

    return {}, 404

# @app.delete('/api/character/<int:character_id')
# def delete_one(character_id):
#     user_id = session.get('user_id')

#     user=User.query.get(user_id)
#     if user:
#         for character in user.characters:
#             if character.id==character_id:
#                 db.session.delete(character)
#                 db.session.commit()
#                 return{}, 204
#             return{}, 404



@app.delete('/api/character/<int:character_id>')
def delete_character(character_id):
    try:
        # Retrieve user from session or authentication mechanism
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({'error': 'User is not logged in.'}), 401

        # Ensure user exists
        user = User.query.get(user_id)
        if not user:
            return jsonify({'error': 'User does not exist.'}), 404

        # Find the character to delete
        character_to_delete = None
        for character in user.characters:
            if character.id == character_id:
                character_to_delete = character
                break

        if not character_to_delete:
            return jsonify({'error': 'Character not found.'}), 404

        # Delete the character
        db.session.delete(character_to_delete)
        db.session.commit()

        return {}, 204  # Return empty response with 204 status on successful deletion

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# @app.get('/api/user/<int:user_id>/character/<int:character_id>')
# def get_one_char(user_id, character_id):
#     character = (db.session.query(Character)
#                  .join(Role)
#                  .filter(Role.user_id == user_id)
#                  .filter(Role.character_id == character_id)
#                  .filter(Character.id == character_id)
#                  .first())
#     if character:
#         return jsonify(character.to_dict()), 200
#     return jsonify({}), 404

# ======UPDATE Current Characters user is on ====


@app.patch('/api/character/<int:id>')
def update_character(id):
    try:
        character = Character.query.get(id)
        if character:
            data = request.json.get('character', {})
            stats_data = data.pop('stats', [])
            misc_stats_data = data.pop('misc_stats', {})  
            saving_throws_data = data.pop('saving_throws',[])
            skills_data = data.pop('skills',[])
            health_data=data.pop('health', [])
            personal_data=data.pop('personal',[])
            attacks_data=data.pop('attacks',[])
            feats_data=data.pop('feats',[])
            other_data=data.pop('other', [])
            equipments_data=data.pop('equipments', [])




            for key, value in data.items():
                setattr(character, key, value)

            if stats_data:
                stats_data = stats_data[0]
                stat = Stat.query.filter_by(character_id=id).first()
                if stat:
                    for key, value in stats_data.items():
                        setattr(stat, key, value)
                else:
                    stat = Stat(character_id=id, **stats_data)
                    db.session.add(stat)

            if misc_stats_data:  # Check if misc_stats_data is not empty
                misc_stats = MiscStat.query.filter_by(character_id=id).first()
                if misc_stats:
                    for key, value in misc_stats_data.items():
                        setattr(misc_stats, key, value)
                else:
                    misc_stats = MiscStat(character_id=id, **misc_stats_data)
                    db.session.add(misc_stats)
            
            if saving_throws_data:
                saving_throws_data = saving_throws_data[0]  
                saving_throws=SavingThrow.query.filter_by(character_id=id).first()
                if saving_throws:
                    for key, value in saving_throws_data.items():
                        setattr(saving_throws, key, value)
                else:
                    saving_throws = SavingThrow(character_id=id, **saving_throws_data)
                    db.session.add(saving_throws)
            
            if skills_data:
                skills_data = skills_data[0]
                skills=Skill.query.filter_by(character_id=id).first()
                if skills:
                    for key, value in skills_data.items():
                        setattr(skills, key, value)
                else:
                    skills= Skill.query.filter_by(character_id=id, **skills_data)
                    db.session.add(skills)
            
            if health_data:
                health_data = health_data[0]
                health=Health.query.filter_by(character_id=id).first()
                if health:
                    for key, value in health_data.items():
                        setattr(health, key, value)
                else:
                    health= Health.query.filter_by(character_id=id, **health_data)
                    db.session.add(health)
                    
            if personal_data:
                personal_data = personal_data[0]
                personal=Personal.query.filter_by(character_id=id).first()
                if personal:
                    for key, value in personal_data.items():
                        setattr(personal, key, value)
                else:
                    personal= Personal.query.filter_by(character_id=id, **personal_data)
                    db.session.add(personal)

            if attacks_data:
                attacks_data = attacks_data[0]
                attacks=Attack.query.filter_by(character_id=id).first()
                if attacks:
                    for key, value in attacks_data.items():
                        setattr(attacks, key, value)
                else:
                    attacks= Attack.query.filter_by(character_id=id, **attacks_data)
                    db.session.add(attacks)

            if feats_data:
                feats_data = feats_data[0]
                feats=Feat.query.filter_by(character_id=id).first()
                if feats:
                    for key, value in feats_data.items():
                        setattr(feats, key, value)
                else:
                    feats= Feat.query.filter_by(character_id=id, **feats_data)
                    db.session.add(feats)

            if other_data:
                other_data = other_data[0]
                other=Other.query.filter_by(character_id=id).first()
                if other:
                    for key, value in other_data.items():
                        setattr(other, key, value)
                else:
                    other= Other.query.filter_by(character_id=id, **other_data)
                    db.session.add(other)

            if equipments_data:
                equipments_data = equipments_data[0]
                equipments=Equipment.query.filter_by(character_id=id).first()
                if equipments:
                    for key, value in equipments_data.items():
                        setattr(equipments, key, value)
                else:
                    equipments= Equipment.query.filter_by(character_id=id, **equipments_data)
                    db.session.add(equipments)
                           
                           
                    

# add next post table here
            db.session.commit()
            return jsonify(character.to_dict()), 200


        return jsonify({'error': 'Character not found'}), 404

    except ValueError as ve:
        db.session.rollback()
        return jsonify({'error': str(ve)}), 400

    except IntegrityError as ie:
        db.session.rollback()
        return jsonify({'error': 'Integrity error occurred'}), 400

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
# ===============

#  this grabs characters with all the inner tables within it ============
# @app.get('/api/characters/<int:character_id>')
# def get_character(character_id):
#     character = Character.query.get(character_id)
#     if character:
#         return character.to_dict(), 200
#     return {}, 404

# @app.patch('/api/characters/<int:id>')
# def update_character(id):
#     try:
#         character = Character.query.filter_by(id=id).first()
#         if character:
#             for key in request.json.keys():
#                 setattr(character, key, request.json[key])
#             db.session.add(character)
#             db.session.commit()
#             return character.to_dict(), 200
#         return {}, 404
#     except Exception as e:
#         return { 'error': str(e) }, 406

# write your routes here! 
# all routes should start with '/api' to account for the proxy


# ======== campaign routes======


# @app.get('/api/user/<int:id>/campaigns')
# def get_user_campaigns(id):
#     user = User.query.filter_by(id=id).first()
#     if user:
#         campaigns = user.campaings 
#         campaigns_list = [campaign.to_dict() for campaign in campaigns]
#         return jsonify(campaigns_list), 200
#     return jsonify([]), 404


@app.get('/api/users/<int:user_id>/campaigns')
def get_user_campaigns(user_id):
    user = User.query.filter_by(id=user_id).first()
    if user:
        campaigns = user.campaings  
        return jsonify([campaign.to_dict() for campaign in campaigns]), 200
    return jsonify([]), 404

if __name__ == '__main__':
    app.run(port=5555, debug=True)
