from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db
# bcrypt 

class Campaign(db.Model, SerializerMixin):
    __tablename__ ="campaigns_table"

    id = db.Column(db.Integer, primary_key = True)
    name=  db.Column(db.String, nullable = False)
    description= db.Column(db.String)
#  realtionships here
    # characters = db.relationship('Character', back_populates='campaign')
    roles = db.relationship('Role', back_populates='campaign')
# serializerules here / association proxy if  needed
    characters =association_proxy("roles", 'character')
    users =association_proxy("roles", 'user')


class Role (db.Model, SerializerMixin):


    __tablename__ = "roles_table"

    id = db.Column(db.Integer, primary_key= True)
    dm = db.Column(db.Boolean)
 
    
    #F keys 
    user_id = db.Column(db.Integer, db.ForeignKey( 'users_table.id' ))
    campaign_id = db.Column(db.Integer, db.ForeignKey( 'campaigns_table.id' ))
    character_id= db.Column(db.Integer, db.ForeignKey( 'characters_table.id' ))

    user = db.relationship('User', back_populates='roles')
    campaign = db.relationship('Campaign', back_populates='roles')

    character = db.relationship('Character', back_populates= 'roles')

# add validations where character  if dm boolean is true character id must be null
# @validates('dm', 'character_id')
# def validate_character_dm(self, key, value):
#     if key == 'dm' and value:
#         if self.character_id is not None:
#             raise ValueError("DM cannot have a character.")
#     elif key == 'character_id' and value is not None:
#         if self.dm:
#             raise ValueError("Character cannot be set if DM is true.")
#     return value
# and vice 



#  user many to many through join table role to many to many campaign 
#  then role has one to one to with character
#  user should be able to get character through role
#  user should be able to get campisg thourgh roles
#  campiagn should know which charac belong to thrgogugh roles
#  campaign  should know users thourgh roles 
#  so the SSOT should be roles ?


#  would you be able to add character through role  to campaign with this set up 
#  might have to connect character table to campaign table 

class User(db.Model, SerializerMixin):

    __tablename__ = "users_table"

    id = db.Column(db.Integer, primary_key = True)
    username= db.Column(db.String, unique=True, nullable=False )
    password= db.Column(db.String)
   
#  realtionships here

    # characters = db.relationship('Character', back_populates ='user')

    roles = db.relationship('Role', back_populates='user')
    campaings =association_proxy("roles", 'campaign')
    characters =association_proxy("roles", 'character')

    
# # serializerules here

# # validations here

class Character(db.Model, SerializerMixin):
    __tablename__ ='characters_table'

    id = db.Column(db.Integer, primary_key = True)
    name=  db.Column(db.String)

    klass = db.Column(db.String)
    level = db.Column(db.Integer)
    background = db.Column(db.String)
    race = db.Column(db.String)
    xp = db.Column(db.Integer)
    alignment = db.Column(db.String)

    # F keys 
    # user_id = db.Column(db.Integer, db.ForeignKey( "users_table.id" ))
    

# #  realtionships here
#     campaign = db.relationship("Campaign", back_populates = "characters")
    # user = db.relationship("User", back_populates = "characters")

    roles= db.relationship("Role", back_populates = 'character' )

    campaigns =association_proxy("roles", 'campaign')
    users =association_proxy("roles", 'user')

    stats = db.relationship('Stat', back_populates='character')


# # - one to many 
# # - this is wehere alot of tables and foriegnkeys would be with all the tables 















# # ********************************rest of character sheet tables below ***********************************************



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
    wis_perception =  db.Column(db.Integer)
    wis_perception_mod =  db.Column(db.Integer)

    # f key to character


    character_id= db.Column(db.Integer, db.ForeignKey( 'characters_table.id' ))

    character = db.relationship('Character', back_populates='stats')


    "just a new change "
    
# # this should have a one to many relatioship to character

# class MiscStat(db.Model, SerializerMixin):
#     __tablename__ = "misc_table"

#     id = db.Column(db.Integer, primary_key = True)

#     inspiration = db.Column(db.Integer)
#     prof_bonus = db.Column(db.Integer)

# # this should have a one to many relatioship to character


# class SavingThrow(db.Model, SerializerMixin):

#     __tablename__ = "saving_throws"

#     id = db.Column(db.Integer, primary_key = True)
# # for proficieny box would add another column where savingthrow_prof = db.Column(db.Boolean)
    
#     strength =  db.Column(db.Integer)
#     strength_pro =  db.Column(db.Boolean)

#     dexterity =  db.Column(db.Integer)
#     dexterity_pro =  db.Column(db.Boolean)

#     constitution =  db.Column(db.Integer)
#     constitution_pro =  db.Column(db.Boolean)

#     intelligence =  db.Column(db.Integer)
#     intelligence_pro =  db.Column(db.Boolean)

#     wisdom =  db.Column(db.Integer)
#     wisdom_pro =  db.Column(db.Boolean)

#     charisma =  db.Column(db.Integer)
#     charisma_pro =  db.Column(db.Boolean)

    
# # this should have a one to many relatioship to character

# class Skill(db.Model, SerializerMixin):

#     __tablename__='skills_table'
#     id = db.Column(db.Integer, primary_key = True)


# # for proficieny box would add another column where skill_prof = db.Column(db.Boolean)
    
#     acrobatics  = db.Column(db.Integer)
#     acrobatics_pro  = db.Column(db.Boolean)
#     animal_handling = db.Column(db.Integer)
#     animal_handling_pro = db.Column(db.Boolean)
#     arcana = db.Column(db.Integer)
#     arcana_pro = db.Column(db.Boolean)
#     athletics = db.Column(db.Integer)
#     athletics_pro = db.Column(db.Boolean)
#     deception = db.Column(db.Integer)
#     deception_pro = db.Column(db.Boolean)
#     history = db.Column(db.Integer)
#     history_pro = db.Column(db.Boolean)
#     insight = db.Column(db.Integer)
#     insight_pro = db.Column(db.Boolean)
#     intimidation = db.Column(db.Integer)
#     intimidation_pro = db.Column(db.Boolean)
#     investigation = db.Column(db.Integer)
#     investigation_pro = db.Column(db.Boolean)
#     medicine = db.Column(db.Integer)
#     medicine_pro = db.Column(db.Boolean)
#     nature = db.Column(db.Integer)
#     nature_pro = db.Column(db.Boolean)
#     perception = db.Column(db.Integer)
#     perception_pro = db.Column(db.Boolean)
#     performance = db.Column(db.Integer)
#     performance_pro = db.Column(db.Boolean)
#     persuasion = db.Column(db.Integer)
#     persuasion_pro = db.Column(db.Boolean)
#     religion = db.Column(db.Integer)
#     religion_pro = db.Column(db.Boolean)
#     sleight_of_hand = db.Column(db.Integer)
#     sleight_of_hand_pro = db.Column(db.Boolean)
#     stealth = db.Column(db.Integer)
#     stealth_pro = db.Column(db.Boolean)
#     survival = db.Column(db.Integer)
#     survival_pro = db.Column(db.Boolean)
    
# # this should have a one to many relatioship to character


# class HealthBlock(db.Model, SerializerMixin):

#     __tablename__="health_block_table"

#     id = db.Column(db.Integer, primary_key = True)

#     armor_Class  = db.Column(db.Integer)
#     initiative  = db.Column(db.Integer)
#     speed  = db.Column(db.Integer)
#     max_hp  = db.Column(db.Integer)
#     current_hp  = db.Column(db.Integer)
#     temp_hp  = db.Column(db.Integer)
#     hit_total  = db.Column(db.Integer)
#     hit_dice  = db.Column(db.Integer)



# # this should have a one to many relatioship to character
    


