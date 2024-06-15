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

@app.patch('/api/character/<int:id>')
def update_character(id):
    try:
        # breakpoint()
        character = Character.query.get(id)
        if character:

            for key, value in request.json.items():
                # breakpoint()
                if 'character' == key:
                    # breakpoint()
                    data = value
                    if character:
                        for key, value in data.items():
                            setattr(character, key, value)
                    else:
                        # character = Character(character_id=id, **data)
                        db.session.add(character)


                if 'stats' == key:
                    stats_data = value
                    stat = Stat.query.filter_by(character_id=id).first()
                    if stat:
                        for key, value in stats_data.items():
                            setattr(stat, key, value)
                    else:
                        stat = Stat(character_id=id, **stats_data)
                        db.session.add(stat)


            # if 'misc_stats' in request.json:
            #     misc_stats_data = request.json['misc_stats']
            #     misc_stat = MiscStat.query.filter_by(character_id=id).first()
            #     if misc_stat:
            #         for key, value in misc_stats_data.items():
            #             setattr(misc_stat, key, value)
            #     else:
            #         misc_stat = MiscStat(character_id=id, **misc_stats_data)
            #         db.session.add(misc_stat)


            # if 'saving_throws' in request.json:
            #     saving_throws_data = request.json['saving_throws']
            #     saving_throw = SavingThrow.query.filter_by(character_id=id).first()
            #     if saving_throw:
            #         for key, value in saving_throws_data.items():
            #             setattr(saving_throw, key, value)
            #     else:
            #         saving_throw = SavingThrow(character_id=id, **saving_throws_data)
            #         db.session.add(saving_throw)


            # if 'skills' in request.json:
            #     skills_data = request.json['skills']
            #     skill = Skill.query.filter_by(character_id=id).first()
            #     if skill:
            #         for key, value in skills_data.items():
            #             setattr(skill, key, value)
            #     else:
            #         skill = Skill(character_id=id, **skills_data)
            #         db.session.add(skill)


            # if 'health' in request.json:
            #     health_data = request.json['health']
            #     health = Health.query.filter_by(character_id=id).first()
            #     if health:
            #         for key, value in health_data.items():
            #             setattr(health, key, value)
            #     else:
            #         health = Health(character_id=id, **health_data)
            #         db.session.add(health)


            # if 'personal' in request.json:
            #     personal_data = request.json['personal']
            #     personal = Personal.query.filter_by(character_id=id).first()
            #     if personal:
            #         for key, value in personal_data.items():
            #             setattr(personal, key, value)
            #     else:
            #         personal = Personal(character_id=id, **personal_data)
            #         db.session.add(personal)


            # if 'attacks' in request.json:
            #     attacks_data = request.json['attacks']
            #     attack = Attack.query.filter_by(character_id=id).first()
            #     if attack:
            #         for key, value in attacks_data.items():
            #             setattr(attack, key, value)
            #     else:
            #         attack = Attack(character_id=id, **attacks_data)
            #         db.session.add(attack)


            # if 'feats' in request.json:
            #     feats_data = request.json['feats']
            #     feat = Feat.query.filter_by(character_id=id).first()
            #     if feat:
            #         for key, value in feats_data.items():
            #             setattr(feat, key, value)
            #     else:
            #         feat = Feat(character_id=id, **feats_data)
            #         db.session.add(feat)


            # if 'equipments' in request.json:
            #     equipments_data = request.json['equipments']
            #     equipment = Equipment.query.filter_by(character_id=id).first()
            #     if equipment:
            #         for key, value in equipments_data.items():
            #             setattr(equipment, key, value)
            #     else:
            #         equipment = Equipment(character_id=id, **equipments_data)
            #         db.session.add(equipment)


            # if 'other' in request.json:
            #     other_data = request.json['other']
            #     other = Other.query.filter_by(character_id=id).first()
            #     if other:
            #         for key, value in other_data.items():
            #             setattr(other, key, value)
            #     else:
            #         other = Other(character_id=id, **other_data)
            #         db.session.add(other)


            db.session.commit()

            return character.to_dict(), 200

        return {'error': 'Character not found'}, 404

    except ValueError as ve:
        db.session.rollback()
        return {'error': str(ve)}, 400

    except IntegrityError as ie:
        db.session.rollback()
        return {'error': 'Integrity error occurred'}, 400

    except Exception as e:
        db.session.rollback()
        return {'error': str(e)}, 500

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
