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




# serializerules here / assproxy is needed


class User(db.Model, SerializerMixin):
    __tablename__ = "users_table"

    id = db.Column(db.Integer, primary_key = True)
    username= db.Column(db.String, unique=True, nullable=False )
    password= db.Column(db.String)
    Dungeonmaster = db.Column(bool)

#  realtionships here
# - should connect to intermediary table which connects to campaigns which would be a many to many (users have many campaigns campagn has many users)
# - should connect to a character table where useres have many characters
# -
# -


# serializerules here


# validations here



class Character(db.Model, SerializerMixin):
    __tablename__ ='characters_table'

    id = db.Column(db.Integer, primary_key = True)
    name=  db.Column(db.String)



#  realtionships here
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
    
