import React, { FC } from 'react'

import './child-skill-row.css'

interface ChildSkillRowProps {
  primaryStatLevel?: string,
  rootClassName: string,
  skillLevel?: string,
  skillMod?: string,
  totalLevel?: string,
  skillName?: string,
}

const ChildSkillRow:FC<ChildSkillRowProps> = (props) => {
  return (
    <div className={`child-skill-row-container ${props.rootClassName} `}>
      <div className="child-skill-row-container01">
        <div className="child-skill-row-container02">
          <input
            type="text"
            id="skill_name_input"
            placeholder={props.skillName}
            className="child-skill-row-textinput input"
          />
          <div className="child-skill-row-container03">
            <div className="">
              <p />
            </div>
          </div>
          <div className="child-skill-row-container04">
            <div className="child-skill-row-container05">
              <span className="child-skill-row-text">[</span>
              <input
                type="text"
                id="stat_level_input"
                placeholder={props.skillLevel}
                className="child-skill-row-textinput1 input"
              />
              <span className="child-skill-row-text01">]</span>
            </div>
            <div className="child-skill-row-container06">
              <span className="child-skill-row-text02">[</span>
              <span className="child-skill-row-text03">
                {props.primaryStatLevel}
              </span>
              <span className="child-skill-row-text04">]</span>
            </div>
            <div className="child-skill-row-container07">
              <span className="child-skill-row-text05">[</span>
              <input
                type="text"
                id="stat_mod_input"
                placeholder={props.skillMod}
                className="child-skill-row-textinput2 input"
              />
              <span className="child-skill-row-text06">]</span>
            </div>
          </div>
        </div>
        <div className="child-skill-row-container08">
          <div className="child-skill-row-container09">
            <span className="child-skill-row-text07">[</span>
            <span className="child-skill-row-text08">{props.totalLevel}</span>
            <span className="child-skill-row-text09">]</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ChildSkillRow.defaultProps = {
  primaryStatLevel: '6',
  rootClassName: '',
  skillLevel: '1',
  skillMod: '1',
  totalLevel: '6',
  skillName: '1',
}

export default ChildSkillRow