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

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# app.json.compact = False
# # app.config.from_object('config')
# CORS(app)

# migrate = Migrate(app, db)

# db.init_app(app)

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

# @app.get('/api/characters/<int:character_id>/skills')
# def get_char_skills(character_id):
#     character = Character.query.get(character_id)
#     if character:
#         skills = character.skills
#         return jsonify(skills=[skill.to_dict() for skill in skills]), 200
#     return jsonify({'error': 'Character not found'}), 404

#  in serialization rules i could add character.skills so i can get it all in one get ?? 
# @app.get('/api/characters/<int:character_id>/stats')
# def get_char_stats(character_id):
#     character = Character.query.get(character_id)
#     if character:
#         stats = character.stats
#         return jsonify(stats=[stat.to_dict() for stat in stats]), 200
#     return jsonify({'error': 'Character not found'}), 404

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


# @app.patch('/api/character/<int:id>')
# def update_character(id):
#     try:
#         character = Character.query.get(id)
#         if character:
#             data = request.json.get('character', {})
#             stats_data = data.pop('stats', [])
#             misc_stats_data=data.pop('misc_stats,',{})

#             for key, value in data.items():
#                 setattr(character, key, value)

#             if stats_data:
#                 stats_data = stats_data[0]
#                 stat = Stat.query.filter_by(character_id=id).first()
#                 if stat:
#                     for key, value in stats_data.items():
#                         setattr(stat, key, value)
#                 else:
#                     stat = Stat(character_id=id, **stats_data)
#                     db.session.add(stat)

#             if misc_stats_data:
                
#                 misc_stats= MiscStat.query.filter_by(character_id=id).first()
#                 if misc_stats:
#                     for key, value in misc_stats_data.items():
#                         setattr(misc_stats_data, key, value)
#                 else:
#                     misc_stats = MiscStat(character_id =id, **misc_stats_data)
#                     db.session.add(misc_stats)

#             db.session.commit()
#             return character.to_dict(), 200

#         return {'error': 'Character not found'}, 404

#     except ValueError as ve:
#         db.session.rollback()
#         return {'error': str(ve)}, 400

#     except IntegrityError as ie:
#         db.session.rollback()
#         return {'error': 'Integrity error occurred'}, 400

#     except Exception as e:
#         db.session.rollback()
#         return {'error': str(e)}, 500



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
