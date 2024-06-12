#!/usr/bin/env python3

from flask import Flask, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import app, db

from models import db, User, Campaign, Role, Character, Stat, MiscStat, SavingThrow, Skill, Health, Personal, Attack, Feat, Equipment, Other

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

migrate = Migrate(app, db)

db.init_app(app)

@app.get('/')
def index():
    return "Hello world"

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

# this grabs all of users characters without the inner tables=================
@app.get('/api/user/<int:user_id>/characters')
def get_all_char(user_id):
    user=User.query.get(user_id)
    # return [character.to_dict() for character in user.characters], 200
    characters =[character.to_dict(rules=['-stats', '-misc_stats','-saving_throws','-skills','-health','-personal','-attacks','-feats','-equipments','-other']) for character in user.characters]

    return jsonify({
        'characters': characters
    }), 200
    # return [u.to_dict() for u in User.characters.query.all()],200


# @app.get('/api/user/<int:user_id>/character/<int:character_id>')
# def get_one_char(user_id, character_id):
#     character=Character.query.where((Character.user_id == user_id ) & ( Character.id == character_id)).first()
#     if character:
#         return character.to_dict(), 200
#     return {}, 404
@app.get('/api/user/<int:user_id>/character/<int:character_id>')
def get_one_char(user_id, character_id):
    character = (db.session.query(Character)
                 .join(Role)
                 .filter(Role.user_id == user_id)
                 .filter(Role.character_id == character_id)
                 .filter(Character.id == character_id)
                 .first())
    if character:
        return jsonify(character.to_dict()), 200
    return jsonify({}), 404


    
#  this grabs characters with all the inner tables within it ============
@app.get('/api/characters/<int:character_id>')
def get_character(character_id):
    character = Character.query.get(character_id)
    if character:
        return character.to_dict(), 200
    return {}, 404

@app.patch('/api/characters/<int:id>')
def update_character(id):
    try:
        character = Character.query.filter_by(id=id).first()
        if character:
            for key in request.json.keys():
                setattr(character, key, request.json[key])
            db.session.add(character)
            db.session.commit()
            return character.to_dict(), 200
        return {}, 404
    except Exception as e:
        return { 'error': str(e) }, 406

# write your routes here! 
# all routes should start with '/api' to account for the proxy


if __name__ == '__main__':
    app.run(port=5555, debug=True)
