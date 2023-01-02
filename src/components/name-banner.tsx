import React, { FC, useEffect, useState } from 'react'
import { pb } from '../lib/pocketbase';

import './name-banner.css'

interface NameBannerProps { 
  rootClassName: any; 
  role: string |undefined; 
  name: string | undefined 
  updateCharacterData: Function
}

interface NameBannerDisplayValues {
  name: string | undefined
}

const NameBanner:FC<NameBannerProps> = (props) => {
  const [displayValues, setDisplayValues] = useState<NameBannerDisplayValues>(props)
  const [roleName, setRoleName] = useState<string>('Retrieving...')

  const handleStringInput = (value: string, field: string, maxLength = 10) => {
    if (value !== props[field as keyof NameBannerProps] && value.length <= maxLength) {
      props.updateCharacterData(field, value)
    } 
    else {
      setDisplayValues({...displayValues, [field]: props[field as keyof NameBannerProps]})
    }
  }

  useEffect(() => {
    if (props.role) {
      pb.collection('roles').getOne(props.role)
        .then((value) => {
          setRoleName(value.name)
        })
        .catch((err) => {
          setRoleName('ERROR')
          console.error(err)
        })
    }
  }, [])

  return (
    <div className={`name-banner-container ${props.rootClassName} `}>
      <div className="name-banner-container1">
        <label className="name-banner-text">{roleName}</label>
      </div>
      <div className="name-banner-container2">
        <div className="name-banner-container3">
          <span className="name-banner-text1">NAME</span>
        </div>
        <div className="name-banner-container4">
          <input
            type="text"
            value={displayValues.name}
            className="name-banner-textinput input"
            onFocus={(e) => (e.target.select())}
            onChange={(e) => (setDisplayValues({...displayValues, name: e.target.value}))}
            onBlur={(e) => handleStringInput(e.target.value, 'name', 20)}
          />
        </div>
      </div>
    </div>
  )
}

NameBanner.defaultProps = {
  rootClassName: '',
  role: '',
  name: 'name',
}

export default NameBanner
