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


const SkillCard:FC<SkillCardProps> = (props) => {
  const [skillList, setSkillList] = useState<SkillList>();

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
      console.log(tempSkillList)
      setSkillList(tempSkillList as SkillList)
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
              skill={skillList?.concentration}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name1"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='conceal/reveal_object'
              skill={skillList?.concealRevealObject}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name2"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='lip_reading'
              skill={skillList?.lipReading}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name4"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='perception'
              skill={skillList?.perception}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name3"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='tracking'
              skill={skillList?.tracking}
            ></SkillRow>
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
              skill={skillList?.athletics}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name12"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='contortionist'
              skill={skillList?.contortionist}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name13"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='dance'
              skill={skillList?.dance}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name16"
              primaryStatName='WILL'
              primaryStatLevel={props.statWill}
              skillDisplayName='endurance'
              skill={skillList?.endurance}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name14"
              primaryStatName='WILL'
              primaryStatLevel={props.statWill}
              skillDisplayName='resist_torture/drugs'
              skill={skillList?.resistTortureDrugs}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name15"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='stealth'
              skill={skillList?.stealth}
            ></SkillRow>
  
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
              skill={skillList?.driveLandVehicle}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name25"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='pilot_air_vehicle (x2)'
              skill={skillList?.pilotAirVehicle}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name26"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='pilot_sea_vehicle'
              skill={skillList?.pilotSeaVehicle}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name27"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='riding'
              skill={skillList?.riding}
            ></SkillRow>
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
              skill={skillList?.accounting}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name6"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='animal_handling'
              skill={skillList?.animalHandling}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name7"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='bureaucracy'
              skill={skillList?.bureaucracy}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name8"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='business'
              skill={skillList?.business}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name9"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='composition'
              skill={skillList?.composition}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name10"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='criminology'
              skill={skillList?.criminology}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name17"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='cryptography'
              skill={skillList?.cryptography}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name18"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='deduction'
              skill={skillList?.deduction}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name19"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='education'
              skill={skillList?.education}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name21"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='gamble'
              skill={skillList?.gamble}
            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name1"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name"
            ></ChildSkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name20"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='library_search'
              skill={skillList?.librarySearch}
            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name2"
            ></ChildSkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name2"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name1"
            ></ChildSkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name22"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='tactics'
              skill={skillList?.tactics}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name23"
              primaryStatName='INT'
              primaryStatLevel={props.statInt}
              skillDisplayName='wilderness_survival'
              skill={skillList?.wildernessSurvival}
            ></SkillRow>
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
              skill={skillList?.brawling}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name31"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='evasion'
              skill={skillList?.evasion}
            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name6"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name6"
            ></ChildSkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name32"
              primaryStatName='DEX'
              primaryStatLevel={props.statDex}
              skillDisplayName='melee_weapon'
              skill={skillList?.meleeWeapon}
            ></SkillRow>
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
              skill={skillList?.acting}
            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name7"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name7"
            ></ChildSkillRow>
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
              skill={skillList?.archery}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name40"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='autofire (x2)'
              skill={skillList?.autofire}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name41"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='handgun'
              skill={skillList?.handgun}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name42"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='heavy_weapons (x2)'
              skill={skillList?.heavyWeapons}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name29"
              primaryStatName='REF'
              primaryStatLevel={props.statRef}
              skillDisplayName='shoulder_arms'
              skill={skillList?.shoulderArms}
            ></SkillRow>
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
              skill={skillList?.bribery}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name44"
              primaryStatName='EMP'
              primaryStatLevel={props.statEmpCurrent}
              skillDisplayName='conversation'
              skill={skillList?.conversation}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name45"
              primaryStatName='EMP'
              primaryStatLevel={props.statEmpCurrent}
              skillDisplayName='human_perception'
              skill={skillList?.humanPerception}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name46"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='interrogation'
              skill={skillList?.interrogation}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name47"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='persuasion'
              skill={skillList?.persuasion}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name48"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='personal_grooming'
              skill={skillList?.personalGrooming}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name49"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='streetwise'
              skill={skillList?.streetwise}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name50"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='trading'
              skill={skillList?.trading}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name51"
              primaryStatName='COOL'
              primaryStatLevel={props.statCool}
              skillDisplayName='wardrobe_&_style'
              skill={skillList?.wardrobeAndStyle}
            ></SkillRow>
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
              skill={skillList?.airVehicleTech}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name34"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='basic_tech'
              skill={skillList?.basicTech}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name35"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='cybertech'
              skill={skillList?.cybertech}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name36"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='demolitions (x2)'
              skill={skillList?.demolitions}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name37"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='electronics/security_tech (x2)'
              skill={skillList?.electronicsSecurityTech}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name38"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='first_aid'
              skill={skillList?.firstAid}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name52"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='forgery'
              skill={skillList?.forgery}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name53"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='land_vehicle_tech'
              skill={skillList?.landVehicleTech}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name54"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='paint/draw/sculpt'
              skill={skillList?.paintDrawSculpt}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name55"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='paramedic (x2)'
              skill={skillList?.paramedic}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name56"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='photography/film'
              skill={skillList?.photographyFilm}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name57"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='pick_lock'
              skill={skillList?.pickLock}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name58"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='pick_pocket'
              skill={skillList?.pickPocket}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name59"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='sea_vehicle_tech'
              skill={skillList?.seaVehicleTech}
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name60"
              primaryStatName='TECH'
              primaryStatLevel={props.statTech}
              skillDisplayName='weaponstech'
              skill={skillList?.weaponstech}
            ></SkillRow>
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
