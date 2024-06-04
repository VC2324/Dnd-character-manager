from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt 



class Campaign(db.Model, SerializerMixin):
    __tablename__ ="campaigns_table"

    id = db.Column(db.Integer, primary_key = True)
    name=  db.Column(db.String)
    user= db.Column(db.String)

    

#  realtionships here
# - should connect to intermediary table which connects to users which would be a many to many (campaigns have many users users has many capnaigns)
# - shoudl also have a one to many with characters campaigns have many characters
    characters = db.relationship('Character', backref='campaign')



# serializerules here / association proxy if  needed


class User_Campaign (db.model):


    user_id = db.Column(db.Integer, db.ForeignKey( 'users_table.id' ))
    campaign_id = db.Column(db.Integer, db.ForeignKey( 'campaigns_table.id' ))

    user = db.relationship('User', back_populates='User_Campaign')
    campaign = db.relationship('Campaign', back_populates='User_Campaign')



class User(db.Model, SerializerMixin):
    __tablename__ = "users_table"

    id = db.Column(db.Integer, primary_key = True)
    username= db.Column(db.String, unique=True, nullable=False )
    password= db.Column(db.String)
    Dungeonmaster = db.Column(db.Boolean)

    


    




#  realtionships here
# - should connect to intermediary table which connects to campaigns which would be a many to many (users have many campaigns campagn has many users)
# - should connect to a character table where useres have many characters
# -
# -
    characters = db.relationship('Character', backref='user')


# serializerules here


# validations here



class Character(db.Model, SerializerMixin):
    __tablename__ ='characters_table'

    id = db.Column(db.Integer, primary_key = True)
    name=  db.Column(db.String)
    # F keys 
    user_id = db.Column(db.Integer, db.ForeignKey("users_table.id"))
    campaign_id = db.Column(db.Integer, db.ForeignKey("campaign_table.id"))



#  realtionships here

# - one to many 
# - this is wehere alot of tables and foriegnkeys would be with all the tables 






# write your models here!


# ********************************rest of character sheet tables below ***********************************************



class Stat(db.Model, SerializerMixin):
    __tablename__ = "stats_table"

    id = db.Column(db.Integer, primary_key = True)

    strength_mod =  db.Column(db.Integer)
    strength =  db.Column(db.Integer)
    dexterity_mod =  db.Column(db.Integer)
    dexterity =  db.Column(db.Integer)
    constitution_mod =  db.Column(db.Integer)
    constitution =  db.Column(db.Integer)
    intelligence_mod =  db.Column(db.Integer)
    intelligence =  db.Column(db.Integer)
    wisdom_mod =  db.Column(db.Integer)
    wisdom =  db.Column(db.Integer)
    charisma_mod =  db.Column(db.Integer)
    charisma =  db.Column(db.Integer)
    perception =  db.Column(db.Integer)
    perception_mod =  db.Column(db.Integer)


    
    
# this should have a one to many relatioship to character


class Misc_stat(db.Model, SerializerMixin):
    __tablename__ = "misc_table"

    id = db.Column(db.Integer, primary_key = True)

    inspiration = db.Column(db.Integer)
    prof_bonus = db.Column(db.Integer)

# this should have a one to many relatioship to character


class Saving_throw(db.Model, SerializerMixin):

    __tablename__ = "saving_throws_table"

    id = db.Column(db.Integer, primary_key = True)
# for proficieny box would add another column where savingthrow_prof = db.Column(db.Boolean)
    
    strength =  db.Column(db.Integer)
    dexterity =  db.Column(db.Integer)
    constitution =  db.Column(db.Integer)
    intelligence =  db.Column(db.Integer)
    wisdom =  db.Column(db.Integer)
    charisma =  db.Column(db.Integer)
    
# this should have a one to many relatioship to character

class Skill(db.Model, SerializerMixin):

    __tablename__='skills_table'
    id = db.Column(db.Integer, primary_key = True)


# for proficieny box would add another column where skill_prof = db.Column(db.Boolean)
    
    acrobatics  = db.Column(db.Integer)
    animal_handling = db.Column(db.Integer)
    arcana = db.Column(db.Integer)
    athletics = db.Column(db.Integer)
    deception = db.Column(db.Integer)
    history = db.Column(db.Integer)
    insight = db.Column(db.Integer)
    intimidation = db.Column(db.Integer)
    investigation = db.Column(db.Integer)
    medicine = db.Column(db.Integer)
    nature = db.Column(db.Integer)
    perception = db.Column(db.Integer)
    performance = db.Column(db.Integer)
    persuasion = db.Column(db.Integer)
    religion = db.Column(db.Integer)
    sleight_of_hand = db.Column(db.Integer)
    stealth = db.Column(db.Integer)
    survival = db.Column(db.Integer)
    
# this should have a one to many relatioship to character


class Health_Block(db.Model, SerializerMixin):

    __tablename__="health_block_table"

    id = db.Column(db.Integer, primary_key = True)

    armor_Class  = db.Column(db.Integer)
    initiative  = db.Column(db.Integer)
    speed  = db.Column(db.Integer)
    max_hp  = db.Column(db.Integer)
    current_hp  = db.Column(db.Integer)
    temp_hp  = db.Column(db.Integer)
    hit_total  = db.Column(db.Integer)
    hit_dice  = db.Column(db.Integer)



# this should have a one to many relatioship to character
    

class Principle_Info(db.Model, SerializerMixin):

    __tablename__ ="principle_info_table"


    id = db.Column(db.Integer, primary_key= True)

    school = db.Column(db.String)
    level = db.Column(db.Integer)
    background = db.Column(db.String)
    race = db.Column(db.String)
    xp = db.Column(db.Integer)
    alignment = db.Column(db.String)


# this should have a one to many relatioship to character


