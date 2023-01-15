import React, { FC, useEffect, useState } from 'react'
import EquippedWeapon from '../../types/weaponType'
import './weapon-row.css'

interface WeaponRowProps {
  rootClassName: string,
  equippedWeapon: EquippedWeapon
  updateWeaponData: Function 
  index: number
}

interface WeaponRowDisplayValues {
  notes: string
}

const WeaponRow:FC<WeaponRowProps> = (props) => {
  const [displayValues, setDisplayValues] = useState<WeaponRowDisplayValues>({notes: ''})

  const updateMag = (value: number) => {
    if (props.equippedWeapon?.magSize  && props.equippedWeapon?.magCurrent !== undefined) {
      let newMag = props.equippedWeapon.magCurrent + value;
      if (newMag >= 0 && newMag <= props.equippedWeapon.magSize) {
        props.updateWeaponData({...props.equippedWeapon, magCurrent: newMag}, props.index)
      }
    }
  }

  const handleStringInput = (value: string, field: string, maxLength = 10) => {
    if (value !== props.equippedWeapon[field as keyof WeaponRowDisplayValues] && value.length <= maxLength) {
      props.updateWeaponData({...props.equippedWeapon, [field]: value}, props.index)
    } 
    else {
      setDisplayValues({...displayValues, [field]: props.equippedWeapon[field as keyof WeaponRowDisplayValues]})
    }
  }

  useEffect(() => {
      setDisplayValues({notes: props.equippedWeapon?.notes ?? ''})

  }, [props.equippedWeapon?.notes])

  return (
    <div className={`weapon-row-container ${props.rootClassName} `}>
      <div className="weapon-row-container1">
        <span className="weapon-row-text">Weapon</span>
        <div className="weapon-row-container2">
          <select name="weaponType" className="weapon-row-weapon-type select" value={props.equippedWeapon && props.equippedWeapon.name ? props.equippedWeapon.name : 'none'}>
          <option value="none" className="">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </option>
            <option value="lightMelee" selected className="">
              Light Melee
            </option>
            <option value="mediumMelee" className="">
              Med. Melee
            </option>
            <option value="heavyMelee" className="">
              Heavy Melee
            </option>
            <option value="veryHeavyMelee" className="">
              V.H. Melee
            </option>
            <option value="mediumPistol" className="">
              Med. Pistol
            </option>
            <option value="heavyPistol" className="">
              Heavy Pistol
            </option>
            <option value="veryHeavyPistol" className="">
              V.H. Pistol
            </option>
            <option value="smg" className="">
              SMG
            </option>
            <option value="heavySmg" className="">
              Heavy SMG
            </option>
            <option value="shotgun" className="">
              Shotgun
            </option>
            <option value="assaultRifle" className="">
              Assault Rifle
            </option>
            <option value="sniperRifle" className="">
              Sniper Rifle
            </option>
            <option value="bow" className="">
              Bow
            </option>
            <option value="grenadeLauncher" className="">
              G. Launcher
            </option>
            <option value="rocketLauncher" className="">
              R. Launcher
            </option>
          </select>
        </div>
        <span className="weapon-row-text01">DMG</span>
        <span className="weapon-row-damage-value">{props.equippedWeapon?.damage ?? '.'}</span>
        <span className="weapon-row-text02">ROF</span>
        <span className="weapon-row-text03">{props.equippedWeapon?.rateOfFire ?? '.'}</span>
      </div>
      <div className="weapon-row-container3">
        <span className="weapon-row-text04">MAG</span>
        <div className="weapon-row-container4">
          <button className="weapon-row-text05" onClick={() => updateMag(1)}>+</button>
          <span className="weapon-row-text06">{
            props.equippedWeapon && props.equippedWeapon.magSize > 0 ? props.equippedWeapon.magCurrent + '/' + props.equippedWeapon.magSize : 'N/A'
          }</span>
          <button className="weapon-row-text07" onClick={() => updateMag(-1)}>-</button>
        </div>
        <p style={{whiteSpace: 'nowrap'}} className="weapon-row-text08">
          Hands Req.
        </p>
        <span className="weapon-row-damage-value1">{props.equippedWeapon?.handsRequired ?? '.'}</span>
        <span className="weapon-row-text09">Quality</span>
        <select 
          name="weaponQuality" 
          className="weapon-row-weapon-type select" 
          value={props.equippedWeapon && props.equippedWeapon.quality ? props.equippedWeapon.quality : 'average'}
          onChange={(e) => props.updateWeaponData({...props.equippedWeapon, quality: e.target.value}, props.index)}  
        >
            <option value="poor" selected className="">
              poor
            </option>
            <option value="average" className="">
              average
            </option>
            <option value="excellent" className="">
              excellent
            </option>
          </select>
      </div>
      <div className="weapon-row-container5">
        <span className="weapon-row-text11">Notes</span>
        <input
          type="text"
          id="humanity_current_input"
          value={displayValues.notes}
          className="weapon-row-textinput input"
          onFocus={(e) => (e.target.select())}
          onChange={(e) => (setDisplayValues({...displayValues, notes: e.target.value}))}
          onBlur={(e) => handleStringInput(e.target.value, 'notes', 20)}
        />
      </div>
    </div>
  )
}

WeaponRow.defaultProps = {
  rootClassName: '',
}



export default WeaponRow