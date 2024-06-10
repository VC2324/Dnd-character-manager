#!/usr/bin/env python3

from app import app
from models import db, User, Campaign, Role, Character, Stat, MiscStat, SavingThrow, Skill, Health, Personal, Attack, Feat, Equipment, Other
from faker import Faker
import random

faker = Faker()

if __name__ == '__main__':
    with app.app_context():
        print("Seeding database...")
       
        User.query.delete()
        Campaign.query.delete()
        Role.query.delete()
        Character.query.delete()
        Stat.query.delete()
        MiscStat.query.delete()
        SavingThrow.query.delete()
        Skill.query.delete()
        Health.query.delete()
        Personal.query.delete()
        Attack.query.delete()
        Feat.query.delete()
        Equipment.query.delete()
        Other.query.delete()


        users = []
        u1 = User(username="Player1", password='123')
        users.append(u1)
        u2 = User(username="Player2", password='123')
        users.append(u2)
        u3 = User(username="Player3", password='123')
        users.append(u3)

        db.session.add_all(users)
        db.session.commit()


        characters = []
        c1 = Character(name="Character1", klass="Rogue", level=5, background="Criminal", race="Human", xp=5000, alignment="Chaotic Neutral")
        characters.append(c1)
        c2 = Character(name="Character2", klass="Fighter", level=3, background="Soldier", race="Dwarf", xp=3000, alignment="Lawful Good")
        characters.append(c2)
        c3 = Character(name="Character3", klass="Wizard", level=2, background="Sage", race="Elf", xp=2000, alignment="Neutral Good")
        characters.append(c3)
        c4 = Character(name="Character4", klass="Cleric", level=4, background="Acolyte", race="Half-Orc", xp=4000, alignment="Lawful Neutral")
        characters.append(c4)

        db.session.add_all(characters)
        db.session.commit()

        for character in characters:
            stat = Stat(
                strength_mod=random.randint(-5, 5),
                strength=random.randint(1, 20),
                dexterity_mod=random.randint(-5, 5),
                dexterity=random.randint(1, 20),
                constitution_mod=random.randint(-5, 5),
                constitution=random.randint(1, 20),
                intelligence_mod=random.randint(-5, 5),
                intelligence=random.randint(1, 20),
                wisdom_mod=random.randint(-5, 5),
                wisdom=random.randint(1, 20),
                charisma_mod=random.randint(-5, 5),
                charisma=random.randint(1, 20),
                wis_perception=random.randint(1, 20),
                wis_perception_mod=random.randint(-5, 5),
                character_id=character.id
            )
            db.session.add(stat)
        
        for character in characters:
            misc_stat = MiscStat(
                inspiration=random.randint(0, 1),
                prof_bonus=random.randint(0, 5),
                character_id=character.id
            )
            db.session.add(misc_stat)
        
        for character in characters:
            saving_throw = SavingThrow(
                strength=random.randint(1, 20),
                strength_pro=random.choice([True, False]),
                dexterity=random.randint(1, 20),
                dexterity_pro=random.choice([True, False]),
                constitution=random.randint(1, 20),
                constitution_pro=random.choice([True, False]),
                intelligence=random.randint(1, 20),
                intelligence_pro=random.choice([True, False]),
                wisdom=random.randint(1, 20),
                wisdom_pro=random.choice([True, False]),
                charisma=random.randint(1, 20),
                charisma_pro=random.choice([True, False]),
                character_id=character.id
            )
            db.session.add(saving_throw)
        

        for character in characters:
            skill = Skill(
                acrobatics=random.randint(1, 20),
                acrobatics_pro=random.choice([True, False]),
                animal_handling=random.randint(1, 20),
                animal_handling_pro=random.choice([True, False]),
                arcana=random.randint(1, 20),
                arcana_pro=random.choice([True, False]),
                athletics=random.randint(1, 20),
                athletics_pro=random.choice([True, False]),
                deception=random.randint(1, 20),
                deception_pro=random.choice([True, False]),
                history=random.randint(1, 20),
                history_pro=random.choice([True, False]),
                insight=random.randint(1, 20),
                insight_pro=random.choice([True, False]),
                intimidation=random.randint(1, 20),
                intimidation_pro=random.choice([True, False]),
                investigation=random.randint(1, 20),
                investigation_pro=random.choice([True, False]),
                medicine=random.randint(1, 20),
                medicine_pro=random.choice([True, False]),
                nature=random.randint(1, 20),
                nature_pro=random.choice([True, False]),
                perception=random.randint(1, 20),
                perception_pro=random.choice([True, False]),
                performance=random.randint(1, 20),
                performance_pro=random.choice([True, False]),
                persuasion=random.randint(1, 20),
                persuasion_pro=random.choice([True, False]),
                religion=random.randint(1, 20),
                religion_pro=random.choice([True, False]),
                sleight_of_hand=random.randint(1, 20),
                sleight_of_hand_pro=random.choice([True, False]),
                stealth=random.randint(1, 20),
                stealth_pro=random.choice([True, False]),
                survival=random.randint(1, 20),
                survival_pro=random.choice([True, False]),
                character_id=character.id
            )
            db.session.add(skill)
        

        for character in characters:
            health = Health(
                armor_class=random.randint(1, 20),
                initiative=random.randint(1, 20),
                speed=random.randint(20, 60),
                max_hp=random.randint(20, 100),
                current_hp=random.randint(1, 100),
                temp_hp=random.randint(0, 20),
                hit_total=random.randint(1, 20),
                hit_dice=random.randint(1, 12),
                character_id=character.id
            )
            db.session.add(health)
        

        for character in characters:
            personal = Personal(
                personality_traits=faker.text(),
                ideals=faker.text(),
                bonds=faker.text(),
                flaws=faker.text(),
                character_id=character.id
            )
            db.session.add(personal)
        

        for character in characters:
            attack = Attack(
                name=faker.word(),
                attack_bonus=random.randint(1, 10),
                dmg=random.randint(1, 12),
                tipe=random.choice(["slashing", "piercing", "bludgeoning"]),
                character_id=character.id
            )
            db.session.add(attack)
        

        for character in characters:
            feat = Feat(
                features=faker.text(),
                traits=faker.text(),
                character_id=character.id
            )
            db.session.add(feat)
        

        for character in characters:
            equipment = Equipment(
                equipment=faker.word(),
                equipment_stat=random.randint(1, 20),
                character_id=character.id
            )
            db.session.add(equipment)
        

        for character in characters:
            other = Other(
                other_prof=faker.word(),
                languages=faker.word(),
                character_id=character.id
            )
            db.session.add(other)


        campaign = Campaign(name="The Great Adventure", description="An epic journey to save the world!")
        db.session.add(campaign)
        db.session.commit()


        roles = []
        r1 = Role(dm=True, user_id=u3.id, campaign_id=campaign.id)
        roles.append(r1)
        r2 = Role(dm=False, user_id=u1.id, character_id=c1.id, campaign_id=campaign.id)
        roles.append(r2)
        r3 = Role(dm=False, user_id=u1.id, character_id=c2.id, campaign_id=campaign.id)
        roles.append(r3)
        r4 = Role(dm=False, user_id=u2.id, character_id=c3.id, campaign_id=campaign.id)
        roles.append(r4)
        r5 = Role(dm=False, user_id=u2.id, character_id=c4.id, campaign_id=campaign.id)
        roles.append(r5)

        db.session.add_all(roles)
        db.session.commit()


        print("Seeding complete!")
