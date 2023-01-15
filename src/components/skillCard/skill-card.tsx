import React, { FC, useState } from 'react'

import PropTypes from 'prop-types'

import SkillHeader from './skill-header'
import SkillRow from './skill-row'
import ParentSkillRow from './parent-skill-row'
import ChildSkillRow from './child-skill-row'
import './skill-card.css'
import SkillList from '../../types/skillType'

interface SkillCardProps {
  chracterId: string;
  rootClassName: string,
}


const SkillCard:FC<SkillCardProps> = (props) => {
  const [skillList, setSkillList] = useState<SkillList>();

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
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name1"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name2"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name4"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name3"
            ></SkillRow>
          </div>
          <div className="skill-card-body-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name2"
              skillBlockName="BODY_SKILLS"
            ></SkillHeader>
            <SkillRow
              skillName="accounting"
              rootClassName="skill-row-root-class-name11"
              totalLevel="20"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name12"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name13"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name14"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name15"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name16"
            ></SkillRow>
          </div>
          <div className="skill-card-control-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name3"
              skillBlockName="CONTROL_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name24"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name25"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name26"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name27"
            ></SkillRow>
          </div>
          <div className="skill-card-education-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name1"
              skillBlockName="EDUCATION_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name5"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name6"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name7"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name8"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name9"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name10"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name17"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name18"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name19"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name21"
            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name1"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name"
            ></ChildSkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name20"
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
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name23"
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
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name31"
            ></SkillRow>
            <ParentSkillRow
              rootClassName="parent-skill-row-root-class-name6"
            ></ParentSkillRow>
            <ChildSkillRow
              rootClassName="child-skill-row-root-class-name6"
            ></ChildSkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name32"
            ></SkillRow>
          </div>
          <div className="skill-card-performance-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name5"
              skillBlockName="PERFORMANCE_SKILLS"
            ></SkillHeader>
            <SkillRow
              skillName="accounting"
              rootClassName="skill-row-root-class-name33"
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
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name40"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name41"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name42"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name29"
            ></SkillRow>
          </div>
          <div className="skill-card-social-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name7"
              skillBlockName="SOCIAL_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name43"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name44"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name45"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name46"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name47"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name48"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name49"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name50"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name51"
            ></SkillRow>
          </div>
          <div className="skill-card-technique-skills">
            <SkillHeader
              rootClassName="skill-header-root-class-name8"
              skillBlockName="TECHNIQUE_SKILLS"
            ></SkillHeader>
            <SkillRow
              rootClassName="skill-row-root-class-name30"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name34"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name35"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name36"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name37"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name38"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name52"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name53"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name54"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name55"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name56"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name57"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name58"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name59"
            ></SkillRow>
            <SkillRow
              rootClassName="skill-row-root-class-name60"
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
