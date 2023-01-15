import React, { FC } from 'react'

import PropTypes from 'prop-types'

import './skill-row.css'

interface SkillRowProps {
    primaryStatLevel?: string,
    skillMod?: string,
    primaryStatName?: string,
    skillLevel?: string,
    skillName?: string,
    rootClassName: string,
    totalLevel?: string,
}

const SkillRow:FC<SkillRowProps> = (props) => {
  return (
    <div className={`skill-row-container ${props.rootClassName} `}>
      <div className="skill-row-container01">
        <span className="skill-row-text">{props.primaryStatName}</span>
      </div>
      <div className="skill-row-container02">
        <span className="skill-row-text01">{props.skillName}</span>
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
              placeholder={props.skillLevel}
              className="skill-row-textinput input"
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
              placeholder={props.skillMod}
              className="skill-row-textinput1 input"
            />
            <span className="skill-row-text08">]</span>
          </div>
        </div>
      </div>
      <div className="skill-row-container08">
        <div className="skill-row-container09">
          <span className="skill-row-text09">[</span>
          <span className="skill-row-text10">{props.totalLevel}</span>
          <span className="skill-row-text11">]</span>
        </div>
      </div>
    </div>
  )
}

SkillRow.defaultProps = {
  primaryStatLevel: '6',
  skillMod: '1',
  primaryStatName: '[ INT ]',
  skillLevel: '1',
  skillName: 'electrionic/security_tech (x2)',
  rootClassName: '',
  totalLevel: '6',
}



export default SkillRow
