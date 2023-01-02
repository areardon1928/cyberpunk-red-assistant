import { update } from 'lodash';
import React, { FC, useEffect, useState } from 'react'

import './health-card.css'

interface HealthCardProps { 
  rootClassName: any; 
  updateCharacterData: Function;
  currentHitPoints: number | undefined; 
  maxHitPoints:  number | undefined;
  bodyInjury1: string | undefined;
  bodyInjury2: string | undefined;
  headInjury: string | undefined;
  bodyInjury1QF: boolean;
  bodyInjury2QF: boolean;
  headInjuryQF: boolean;
  addiction1: string | undefined; 
  addiction2: string | undefined; 
  addiction3: string | undefined; 
  addiction4: string | undefined 
}

interface HealthCardDisplayValues {
  currentHitPoints: number | undefined; 
  addiction1: string | undefined; 
  addiction2: string | undefined; 
  addiction3: string | undefined; 
  addiction4: string | undefined 
}

const HealthCard:FC<HealthCardProps> = (props) => {
  const [woundStatus, setWoundStatus] = useState<string>('')
  const [displayValues, setDisplayValues] = useState<HealthCardDisplayValues>(props)

  const updateWoundStatus = () => {
    if(props.currentHitPoints && props.maxHitPoints) {
      if (props.currentHitPoints <= 0) {
        setWoundStatus('MORTALLY_WOUNDED')
      } 
      else if (props.currentHitPoints <= (props.maxHitPoints/2)) {
        setWoundStatus('SERIOUSLY_WOUNDED')
      }
      else if (props.currentHitPoints < props.maxHitPoints) {
        setWoundStatus('LIGHTLY_WOUNDED')
      } else {
        setWoundStatus('HEALTHY')
      }
    }
  }

  const handleNumberInput = (value: string, field: string, min: number = 1, max: number = 20) => {
    if (value.trim() === '') {
      props.updateCharacterData(field, min)
    } 
    else {
      const numValue = parseFloat(value)
      console.log(numValue)
      if (!isNaN(numValue) && numValue >= min && numValue <= max && numValue !== props[field as keyof HealthCardDisplayValues]) {
        props.updateCharacterData(field, numValue)
        updateWoundStatus()
      } else {
        setDisplayValues({...displayValues, [field]: props[field as keyof HealthCardDisplayValues]})
      }
    }
  }

  const handleStringInput = (value: string, field: string, maxLength = 10) => {
    if (value !== props[field as keyof HealthCardDisplayValues] && value.length <= maxLength) {
      props.updateCharacterData(field, value)
    } 
    else {
      setDisplayValues({...displayValues, [field]: props[field as keyof HealthCardDisplayValues]})
    }
  }

  useEffect(() => {
    updateWoundStatus()
  }, [props])

  return (
    <div className={`health-card-container ${props.rootClassName} `}>
      <div className="health-card-container01">
        <label className="health-card-text">Biomonitor</label>
      </div>
      <div className="health-card-container02">
        <div className="health-card-container03">
          <div className="health-card-container04">
            <div className="health-card-container05">
              <div className="health-card-container06">
                <span className="health-card-text01">HP</span>
              </div>
              <input
                type="text"
                id="humanity_current_input"
                value={displayValues.currentHitPoints}
                className="health-card-textinput input"
                onBlur={(e) => handleNumberInput(e.target.value, 'currentHitPoints', -40, props.maxHitPoints)}
                onChange={(e) => setDisplayValues({...displayValues, currentHitPoints: parseFloat(e.target.value)})}
                onFocus = {(e) => e.target.select()}
              />
              <div className="health-card-container07">
                <span className="health-card-text02">OUT OF</span>
              </div>
              <div className="health-card-container08">
                <span className="health-card-text03">{props.maxHitPoints}</span>
              </div>
            </div>
            <div className="health-card-container09">
              <span className="health-card-text04">{woundStatus}</span>
            </div>
          </div>
          <div className="health-card-container10">
            <div className="health-card-container11">
              <label className="health-card-text05">
                <span className="">CRITICAL_injuries</span>
                <br className=""></br>
              </label>
              <div className="health-card-container12">
                <span className="health-card-text08">+</span>
                <select
                  name="bodyInjury1"
                  className="health-card-select select"
                  value={props.bodyInjury1 ?? "none"}
                  onChange={(e) => props.updateCharacterData('bodyInjury1', e.target.value)}
                >
                  <option value="none" selected className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option value="dismemberedArm" className="">
                    dismembered_arm
                  </option>
                  <option value="dismemberedHand" className="">
                    dismembered_hand
                  </option>
                  <option value="collapsedLung" className="">
                    collapsed_lung
                  </option>
                  <option value="brokenRibs" className="">
                    broken_ribs
                  </option>
                  <option value="brokenArm" className="">
                    broken_arm
                  </option>
                  <option value="foreignObject" className="">
                    foreign_object
                  </option>
                  <option value="brokenLeg" className="">
                    broken_leg
                  </option>
                  <option value="tornMuscle" className="">
                    torn_muscle
                  </option>
                  <option value="spinalInjury" className="">
                    spinal_injury
                  </option>
                  <option value="crushedFingers" className="">
                    crushed_fingers
                  </option>
                  <option value="dismemberedLegs" className="">
                    dismembered_legs
                  </option>
                </select>
              </div>
              <div className="health-card-container13">
                <span className="health-card-text09">+</span>
                <select
                  name="bodyInjury2"
                  className="health-card-select1 select"
                  value={props.bodyInjury2 ?? "none"}
                  onChange={(e) => props.updateCharacterData('bodyInjury2', e.target.value)}
                >
                  <option value="none" selected className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option value="dismemberedArm" className="">
                    dismembered_arm
                  </option>
                  <option value="dismemberedHand" className="">
                    dismembered_hand
                  </option>
                  <option value="brokenRibs" className="">
                    broken_ribs
                  </option>
                  <option value="brokenArm" className="">
                    broken_arm
                  </option>
                  <option value="foreignObject" className="">
                    foreign_object
                  </option>
                  <option value="brokenLeg" className="">
                    broken_leg
                  </option>
                  <option value="tornMuscle" className="">
                    torn_muscle
                  </option>
                  <option value="spinalInjury" className="">
                    spinal_injury
                  </option>
                  <option value="crushedFingers" className="">
                    crushed_fingers
                  </option>
                  <option value="dismemberedLegs" className="">
                    dismembered_legs
                  </option>
                </select>
              </div>
              <div className="health-card-container14">
                <span className="health-card-text10">*</span>
                <select
                  name="bodyInjury2"
                  className="health-card-select2 select"
                  value={props.headInjury ?? "none"}
                  onChange={(e) => props.updateCharacterData('headInjury', e.target.value)}
                >
                  <option value="none" selected className="">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option value="lostEye" className="">
                    lost_eye
                  </option>
                  <option value="brainInjury" className="">
                    brain_injury
                  </option>
                  <option value="damagedEye" className="">
                    damaged_eye
                  </option>
                  <option value="concussion" className="">
                    concussion
                  </option>
                  <option value="brokenJaw" className="">
                    broken_jaw
                  </option>
                  <option value="foreignObject" className="">
                    foreign_object
                  </option>
                  <option value="whiplash" className="">
                    whiplash
                  </option>
                  <option value="crackedSkull" className="">
                    cracked_skull
                  </option>
                  <option value="damagedEar" className="">
                    damaged_ear
                  </option>
                  <option value="crushedWindpipe" className="">
                    crushed_windpipe
                  </option>
                  <option value="lostEar" className="">
                    lost_ear
                  </option>
                </select>
              </div>
            </div>
            <div className="health-card-container15">
              <label className="health-card-text11">
                <span className="">Q/F?</span>
                <br className=""></br>
              </label>
              <div className="health-card-container16">
                <input
                  type="checkbox"
                  className="health-card-checkbox"
                  checked={props.bodyInjury1QF}
                  onChange={(e) => props.updateCharacterData('bodyInjury1QF', e.target.checked) }
                />
              </div>
              <div className="health-card-container17">
                <input
                  type="checkbox"
                  className="health-card-checkbox1"
                  checked={props.bodyInjury2QF}
                  onChange={(e) => props.updateCharacterData('bodyInjury2QF', e.target.checked) }
                />
              </div>
              <div className="health-card-container18">
                <input 
                  type="checkbox" 
                  className="health-card-checkbox2" 
                  checked={props.headInjuryQF}
                  onChange={(e) => props.updateCharacterData('headInjuryQF', e.target.checked) }
                />                
              </div>
            </div>
          </div>
        </div>
        <div className="health-card-container19">
          <label className="health-card-text14">
            <span className="">addictions</span>
            <br className=""></br>
          </label>
          <input
            type="text"
            id="addiction1_input"
            value={displayValues.addiction1}
            className="health-card-textinput1 input"
            onFocus={(e) => (e.target.select())}
            onChange={(e) => (setDisplayValues({...displayValues, addiction1: e.target.value}))}
            onBlur={(e) => handleStringInput(e.target.value, 'addiction1', 20)}
          />
          <input
            type="text"
            id="addiction2_input"
            value={displayValues.addiction2}
            className="health-card-textinput2 input"
            onFocus={(e) => (e.target.select())}
            onChange={(e) => (setDisplayValues({...displayValues, addiction2: e.target.value}))}
            onBlur={(e) => handleStringInput(e.target.value, 'addiction2', 20)}
          />
          <input
            type="text"
            id="addiction3_input"
            value={displayValues.addiction3}
            className="health-card-textinput3 input"
            onFocus={(e) => (e.target.select())}
            onChange={(e) => (setDisplayValues({...displayValues, addiction3: e.target.value}))}
            onBlur={(e) => handleStringInput(e.target.value, 'addiction3', 20)}
          />
          <input
            type="text"
            id="humanity_current_input"
            placeholder={displayValues.addiction4}
            className="health-card-textinput4 input"
            onFocus={(e) => (e.target.select())}
            onChange={(e) => (setDisplayValues({...displayValues, addiction4: e.target.value}))}
            onBlur={(e) => handleStringInput(e.target.value, 'addiction4', 20)}
          />
        </div>
      </div>
    </div>
  )
}

HealthCard.defaultProps = {
  addiction3: '',
  currentHitPoints: 0,
  rootClassName: '',
  addiction4: '',
  addiction1: '',
  maxHitPoints: 0,
  addiction2: '',
}

export default HealthCard
