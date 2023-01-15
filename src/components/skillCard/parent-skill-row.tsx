import React, { FC } from 'react'

import './parent-skill-row.css'

interface ParentSkillRowProps {
  primaryStatName?: string,
  skillName?: string,
  rootClassName: string,
}

const ParentSkillRow:FC<ParentSkillRowProps> = (props) => {
  return (
    <div className={`parent-skill-row-container ${props.rootClassName} `}>
      <div className="parent-skill-row-container1">
        <div className="parent-skill-row-container2">
          <span className="parent-skill-row-text">[ {props.primaryStatName} ]</span>
        </div>
        <div className="parent-skill-row-container3">
          <span className="parent-skill-row-text1">{props.skillName}</span>
        </div>
      </div>
    </div>
  )
}

ParentSkillRow.defaultProps = {
  primaryStatName: 'INT',
  skillName: 'electrionic/security_tech (x2)',
  rootClassName: '',
}



export default ParentSkillRow