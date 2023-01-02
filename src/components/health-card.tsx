import React, { FC, useState } from 'react'

import './health-card.css'

interface HealthCardProps { 
  rootClassName: any; 
  currentHitPoints?: string | undefined; 
  maxHitPoints?: string | number | boolean | undefined;
  bodyInjury1: string | undefined;
  bodyInjury2: string | undefined;
  headInjury: string | undefined;
  addiction1?: string | undefined; 
  addiction2?: string | undefined; 
  addiction3?: string | undefined; 
  addiction4?: string | undefined 
}

const HealthCard:FC<HealthCardProps> = (props) => {
  const [woundStatus, setWoundStatus] = useState<string>('HEALTHY')

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
                placeholder={props.currentHitPoints}
                className="health-card-textinput input"
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
                />
              </div>
              <div className="health-card-container17">
                <input
                  type="checkbox"
                  className="health-card-checkbox1"
                />
              </div>
              <div className="health-card-container18">
                <input type="checkbox" className="health-card-checkbox2" />
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
            id="humanity_current_input"
            placeholder={props.addiction1}
            className="health-card-textinput1 input"
          />
          <input
            type="text"
            id="humanity_current_input"
            placeholder={props.addiction2}
            className="health-card-textinput2 input"
          />
          <input
            type="text"
            id="humanity_current_input"
            placeholder={props.addiction3}
            className="health-card-textinput3 input"
          />
          <input
            type="text"
            id="humanity_current_input"
            placeholder={props.addiction4}
            className="health-card-textinput4 input"
          />
        </div>
      </div>
    </div>
  )
}

HealthCard.defaultProps = {
  addiction3: '',
  currentHitPoints: '0',
  rootClassName: '',
  addiction4: '',
  addiction1: '',
  maxHitPoints: '0',
  addiction2: '',
}

export default HealthCard
