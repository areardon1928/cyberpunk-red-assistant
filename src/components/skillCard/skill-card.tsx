import React, { FC, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import SkillHeader from './skill-header'
import SkillRow from './skill-row'
import ParentSkillRow from './parent-skill-row'
import ChildSkillRow from './child-skill-row'
import './skill-card.css'
import SkillList from '../../types/skillType'
import { pb } from '../../lib/pocketbase'
import Skill from '../../types/skillType'

interface SkillCardProps {
  characterId: string;
  rootClassName: string,
  statMove: number;
  statBody: number;
  statRef: number;
  statDex: number; 
  statInt: number; 
  statWill: number;
  statCool: number;
  statTech: number; 
  statEmpCurrent: number;
  statLuckCurrent: number;
}

interface ChildListProps {
  parentSkill: Skill
}

const SkillCard:FC<SkillCardProps> = (props) => {
  const [skillList, setSkillList] = useState<SkillList>();


  const ChildList = (parentSkill:Skill) => {

    const childSkills = []
    for (const skillName in skillList) {
      const skill = skillList[skillName as keyof SkillList] as Skill
      if (skill.parentSkill === parentSkill.name) {
        childSkills.push(skill)
      }
    }
    return childSkills
  }

  const updateSkillData = (skill: Skill, newSkill: boolean) => {
    if (!newSkill) {
      // If both are zero, delete the skill from the list
      if (skill.modifier === 0 && skill.skillLevel === 0) {
        pb.collection('characterSkills').delete(skill.id)
          .then(() => {
            console.log('Successfully deleted skill')
            const tempSkills = {...skillList};
            delete tempSkills[skill.name as keyof SkillList]
            setSkillList(tempSkills as SkillList)
          }).catch(err => {
            console.log(err);
          })
          return;
      }
      pb.collection('characterSkills').update(skill.id, skill)
        .then(value => {
          console.log('Successfully updated skill, ', value)
          console.log(skillList)
          setSkillList({...skillList, [value.name]: value as unknown as Skill} as SkillList)
        }).catch(err => {
          console.log(err)
        })
    } else {
      // if (skill.modifier === 0 && skill.skillLevel === 0)
      //   return;
      pb.collection('characterSkills').create({...skill, characterId: props.characterId})
        .then(value => {
          console.log('Successfully created new skill ', value)
          setSkillList({...skillList, [value.name]: value as unknown as Skill} as SkillList)
        }).catch(err => {
          console.log(err)
        })
    }
    
  }

  useEffect(() => {
    pb.collection('characterSkills').getList(undefined, undefined, 
      {
        filter: `characterId = "${props.characterId}"`
      }
    ).then((value) => {
      const tempSkillList: any = {}
      value.items.forEach((skill) => {
        tempSkillList[skill.name] = skill
      })
      setSkillList(tempSkillList as SkillList)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className={`skill-card-container ${props.rootClassName} `}>
      <div className="skill-card-container1">
        <label className="skill-card-text">skills</label>
      </div>
      <div className="skill-card-container2">
        <div className="skill-card-skill-group-container1">
          <div className="skill-card-awareness-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name"
              primaryStatName='WILL'
              primaryStatLevel={props.statWill}
              skillDisplayName='concentration'
              skill={skillList?.concentration} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name1"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='conceal/reveal_object'
              skill={skillList?.concealRevealObject} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name2"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='lip_reading'
              skill={skillList?.lipReading} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name4"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='perception'
              skill={skillList?.perception} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name3"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='tracking'
              skill={skillList?.tracking} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
          <div className="skill-card-body-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name2"
              skillBlockName="BODY_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name11"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='athletics'
              skill={skillList?.athletics} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name12"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='contortionist'
              skill={skillList?.contortionist} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name13"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='dance'
              skill={skillList?.dance} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name16"
              primaryStatName='WILL'
              primaryStatLevel={props.statWill}
              skillDisplayName='endurance'
              skill={skillList?.endurance} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name14"
              primaryStatName='WILL'
              primaryStatLevel={props.statWill}
              skillDisplayName='resist_torture/drugs'
              skill={skillList?.resistTortureDrugs} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name15"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='stealth'
              skill={skillList?.stealth} updateSkillData={updateSkillData}            ></SkillRow>
  
          </div>
          <div className="skill-card-control-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name3"
              skillBlockName="CONTROL_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name24"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='drive_land_vehicle'
              skill={skillList?.driveLandVehicle} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name25"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='pilot_air_vehicle (x2)'
              skill={skillList?.pilotAirVehicle} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name26"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='pilot_sea_vehicle'
              skill={skillList?.pilotSeaVehicle} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name27"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='riding'
              skill={skillList?.riding} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
          <div className="skill-card-education-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name1"
              skillBlockName="EDUCATION_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name5"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='accounting'
              skill={skillList?.accounting} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name6"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='animal_handling'
              skill={skillList?.animalHandling} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name7"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='bureaucracy'
              skill={skillList?.bureaucracy} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name8"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='business'
              skill={skillList?.business} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name9"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='composition'
              skill={skillList?.composition} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name10"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='criminology'
              skill={skillList?.criminology} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name17"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='cryptography'
              skill={skillList?.cryptography} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name18"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='deduction'
              skill={skillList?.deduction} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name19"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='education'
              skill={skillList?.education} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name21"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='gamble'
              skill={skillList?.gamble} updateSkillData={updateSkillData}            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name1"
              primaryStatName='INT'
              skillName='language'
            ></ParentSkillRow>
            {skillList?.language && ChildList(skillList.language).map((skill, i) => (
              <ChildSkillRow rootClassName="child-skill-row-root-class-name2" skill={skill} primaryStatLevel={props.statInt}/>
            ))}
            <SkillRow
              rootClassName="skill-row-root-class-name20"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='library_search'
              skill={skillList?.librarySearch} updateSkillData={updateSkillData}            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name"
              primaryStatName='INT'
              skillName='local_expert'
            ></ParentSkillRow>
            {skillList?.localExpert && ChildList(skillList.localExpert).map((skill, i) => (
              <ChildSkillRow rootClassName="child-skill-row-root-class-name2" skill={skill} primaryStatLevel={props.statInt} key={i}/>
            ))}
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name2"
              primaryStatName='INT'
              skillName='science'
            ></ParentSkillRow>
            {skillList?.science && ChildList(skillList.science).map((skill, i) => (
              <ChildSkillRow rootClassName="child-skill-row-root-class-name2" skill={skill} primaryStatLevel={props.statInt} key={i}/>
            ))}
            <SkillRow
              rootClassName="skill-row-root-class-name22"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='tactics'
              skill={skillList?.tactics} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name23"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='wilderness_survival'
              skill={skillList?.wildernessSurvival} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
        </div>
        <div className="skill-card-skill-group-container11">
          <div className="skill-card-fighting-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name4"
              skillBlockName="FIGTING_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name28"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='brawling'
              skill={skillList?.brawling} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name31"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='evasion'
              skill={skillList?.evasion} updateSkillData={updateSkillData}            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name6"
              primaryStatName='TECH'
              skillName='martial_arts (x2)'
            ></ParentSkillRow>
            {skillList?.martialArts && ChildList(skillList.martialArts).map((skill, i) => (
              <ChildSkillRow rootClassName="child-skill-row-root-class-name2" skill={skill} primaryStatLevel={props.statDex} key={i}/>
            ))}
            <SkillRow
              rootClassName="skill-row-root-class-name32"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='melee_weapon'
              skill={skillList?.meleeWeapon} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
          <div className="skill-card-performance-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name5"
              skillBlockName="PERFORMANCE_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name33"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='acting'
              skill={skillList?.acting} updateSkillData={updateSkillData}            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name7"
              primaryStatName='TECH'
              skillName='play_instrument'
            ></ParentSkillRow>
            {skillList?.playInstrument && ChildList(skillList.playInstrument).map((skill, i) => (
              <ChildSkillRow rootClassName="child-skill-row-root-class-name2" skill={skill} primaryStatLevel={props.statTech}/>
            ))}
          </div>
          <div className="skill-card-ranged-weapon-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name6"
              skillBlockName="RANGED_WEAPON_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name39"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='archery'
              skill={skillList?.archery} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name40"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='autofire (x2)'
              skill={skillList?.autofire} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name41"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='handgun'
              skill={skillList?.handgun} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name42"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='heavy_weapons (x2)'
              skill={skillList?.heavyWeapons} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name29"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='shoulder_arms'
              skill={skillList?.shoulderArms} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
          <div className="skill-card-social-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name7"
              skillBlockName="SOCIAL_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name43"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='bribery'
              skill={skillList?.bribery} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name44"
              primaryStatName='EMP'
              primaryStatLevel={props.statEmpCurrent}
              skillDisplayName='conversation'
              skill={skillList?.conversation} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name45"
              primaryStatName='EMP'
              primaryStatLevel={props.statEmpCurrent}
              skillDisplayName='human_perception'
              skill={skillList?.humanPerception} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name46"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='interrogation'
              skill={skillList?.interrogation} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name47"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='persuasion'
              skill={skillList?.persuasion} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name48"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='personal_grooming'
              skill={skillList?.personalGrooming} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name49"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='streetwise'
              skill={skillList?.streetwise} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name50"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='trading'
              skill={skillList?.trading} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name51"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='wardrobe_&_style'
              skill={skillList?.wardrobeAndStyle} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
          <div className="skill-card-technique-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name8"
              skillBlockName="TECHNIQUE_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name30"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='air_vehicle_tech'
              skill={skillList?.airVehicleTech} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name34"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='basic_tech'
              skill={skillList?.basicTech} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name35"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='cybertech'
              skill={skillList?.cybertech} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name36"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='demolitions (x2)'
              skill={skillList?.demolitions} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name37"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='electronics/security_tech (x2)'
              skill={skillList?.electronicsSecurityTech} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name38"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='first_aid'
              skill={skillList?.firstAid} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name52"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='forgery'
              skill={skillList?.forgery} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name53"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='land_vehicle_tech'
              skill={skillList?.landVehicleTech} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name54"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='paint/draw/sculpt'
              skill={skillList?.paintDrawSculpt} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name55"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='paramedic (x2)'
              skill={skillList?.paramedic} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name56"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='photography/film'
              skill={skillList?.photographyFilm} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name57"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='pick_lock'
              skill={skillList?.pickLock} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name58"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='pick_pocket'
              skill={skillList?.pickPocket} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name59"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='sea_vehicle_tech'
              skill={skillList?.seaVehicleTech} updateSkillData={updateSkillData}            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name60"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='weaponstech'
              skill={skillList?.weaponstech} updateSkillData={updateSkillData}            ></SkillRow>
          </div>
        </div>
      </div>
    </div>
  )
}

SkillCard.defaultProps = {
  rootClassName: '',
}


export default SkillCard
