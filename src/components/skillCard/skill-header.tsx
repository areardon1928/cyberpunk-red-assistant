import React, { FC } from 'react'

import PropTypes from 'prop-types'

import './skill-header.css'

interface SkillHeaderProps {
  rootClassName: string,
  skillBlockName?: string,
}

const SkillHeader:FC<SkillHeaderProps> = (props) => {
  return (
    <div className={`skill-header-container ${props.rootClassName} `}>
      <div className="skill-header-container1">
        <div className="skill-header-container2">
          <span className="skill-header-text">{props.skillBlockName}</span>
        </div>
        <div className="skill-header-container3">
          <div className="skill-header-container4">
            <span className="skill-header-text1">LVL</span>
          </div>
          <div className="skill-header-container5">
            <span className="skill-header-text2">STAT</span>
          </div>
          <div className="skill-header-container6">
            <span className="skill-header-text3">MOD</span>
          </div>
        </div>
      </div>
      <div className="skill-header-container7">
        <div className="skill-header-container8">
          <span className="skill-header-text4">BASE</span>
        </div>
      </div>
    </div>
  )
}

SkillHeader.defaultProps = {
  rootClassName: '',
  skillBlockName: 'AWARENESS_SKILLS',
}


export default SkillHeader