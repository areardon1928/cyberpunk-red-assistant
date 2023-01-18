import React, { FC, useEffect, useState } from 'react'
import './skill-row.css'
import Skill from '../../types/skillType'
import { skillDisplayMapping } from '../../helpers/skillDisplayMapping'

interface SkillRowProps {
  primaryStatLevel: number,
  primaryStatName: string,
  skill?: Skill,
  skillDisplayName: string
  rootClassName: string,
  updateSkillData: Function,
}

interface SkillRowDisplayValues {
  skillLevel?: number,
  modifier?: number
}

const SkillRow:FC<SkillRowProps> = (props) => {
  const calcTotalLevel = () => setTotalLevel(props.skill ? props.skill?.skillLevel + props.skill?.modifier + props.primaryStatLevel : props.primaryStatLevel)
  const [totalLevel, setTotalLevel] = useState<number>()
  const [displayValues, setDisplayValues] = useState<SkillRowDisplayValues>(props.skill as SkillRowDisplayValues)

  const handleNumberInput = (value: string, field: string, min: number = 0, max: number = 10) => {
    let isNewSkill = true;
    let tempSkill: any;
    if (props.skill) {
      tempSkill = {...props.skill}
      isNewSkill = false;
    } else {
      tempSkill = {
        name: skillDisplayMapping.revGet(props.skillDisplayName),
        skillLevel: 0,
        modifier: 0,
      }
    }

    if (value.trim() === '') {
      props.updateSkillData({...tempSkill, [field]: min }, isNewSkill)
    } 
    else {
      const numValue = parseFloat(value)
      console.log(numValue)
      if (!isNaN(numValue) && numValue >= min && numValue <= max &&  numValue !== tempSkill[field as keyof Skill]) {
        props.updateSkillData({...tempSkill, [field]: numValue}, isNewSkill)
      } else {
        setDisplayValues({...displayValues, [field]: tempSkill[field as keyof SkillRowDisplayValues]})
      }
    }
  }

  useEffect(() => {
    calcTotalLevel();
  }, [props.skill, props.primaryStatLevel])

  useEffect(() => {
    setDisplayValues({
      skillLevel: props.skill?.skillLevel,
      modifier: props.skill?.modifier
    })
  }, [props.skill?.skillLevel, props.skill?.modifier])

  return (
    <div className={`skill-row-container ${props.rootClassName} `}>
      <div className="skill-row-container01">
        <span className="skill-row-text">[{props.primaryStatName}]</span>
      </div>
      <div className="skill-row-container02">
        <span className="skill-row-text01">{props.skillDisplayName}</span>
        <div className="skill-row-container03">
          <div className="">
              <p/>
          </div>
        </div>
        <div className="skill-row-container04">
          <div className="skill-row-container05">
            <span className="skill-row-text02">[</span>
            <input
              type="text"
              id="stat_level_input"
              value={displayValues?.skillLevel ?? ""}
              className="skill-row-textinput input"
              onBlur={(e) => handleNumberInput(e.target.value, 'skillLevel', 0, 10)}
              onChange={(e) => setDisplayValues({...displayValues, skillLevel: parseFloat(e.target.value)})}
              onFocus = {(e) => e.target.select()}
            />
            <span className="skill-row-text03">]</span>
          </div>
          <div className="skill-row-container06">
            <span className="skill-row-text04">[</span>
            <span className="skill-row-text05">{props.primaryStatLevel}</span>
            <span className="skill-row-text06">]</span>
          </div>
          <div className="skill-row-container07">
            <span className="skill-row-text07">[</span>
            <input
              type="text"
              id="stat_mod_input"
              value={displayValues?.modifier ?? ""}
              className="skill-row-textinput1 input"
              onBlur={(e) => handleNumberInput(e.target.value, 'modifier', 0, 10)}
              onChange={(e) => setDisplayValues({...displayValues, modifier: parseFloat(e.target.value)})}
              onFocus = {(e) => e.target.select()}
            />
            <span className="skill-row-text08">]</span>
          </div>
        </div>
      </div>
      <div className="skill-row-container08">
        <div className="skill-row-container09">
          <span className="skill-row-text09">[</span>
          <span className="skill-row-text10">{totalLevel}</span>
          <span className="skill-row-text11">]</span>
        </div>
      </div>
    </div>
  )
}

SkillRow.defaultProps = {
  primaryStatLevel: 6,
  primaryStatName: 'LUCK',
  skillDisplayName: 'electrionic/security_tech (x2)',
  rootClassName: '',
}



export default SkillRow
