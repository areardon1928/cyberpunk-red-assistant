import React, { FC, useState } from 'react'

import './primary-stat-card.css'

interface PrimaryStatCardProps { 
  rootClassName: any; 
  updateCharacterData: Function;
  statMove: number | undefined; 
  statBody: number | undefined; 
  statRef: number | undefined; 
  statDex: number | undefined; 
  statInt: number | undefined; 
  statWill: number | undefined; 
  statCool: number | undefined; 
  statTech: number | undefined; 
  statEmpCurrent: number | undefined; 
  statEmpMax: number | undefined; 
  statLuckCurrent: number | undefined; 
  statLuckMax: number | undefined; 
}

interface PrimaryStatCardDisplayValues {  
  statMove: number | undefined; 
  statBody: number | undefined; 
  statRef: number | undefined; 
  statDex: number | undefined; 
  statInt: number | undefined; 
  statWill: number | undefined; 
  statCool: number | undefined; 
  statTech: number | undefined; 
  statEmpCurrent: number | undefined; 
  statEmpMax: number | undefined; 
  statLuckCurrent: number | undefined; 
  statLuckMax: number | undefined 
}

const PrimaryStatCard:FC<PrimaryStatCardProps> = (props) => {
  const [displayValues, setDisplayValues] = useState<PrimaryStatCardDisplayValues>(props)

  const handleNumberInput = (value: string, field: string, min: number = 1, max: number = 20) => {
    if (value.trim() === '') {
      props.updateCharacterData(field, min)
    } 
    else {
      const numValue = parseFloat(value)
      console.log(numValue)
      if (!isNaN(numValue) && numValue >= min && numValue <= max && numValue !== props[field as keyof PrimaryStatCardProps]) {
        props.updateCharacterData(field, numValue)
      } else {
        setDisplayValues({...displayValues, [field]: props[field as keyof PrimaryStatCardProps]})
      }
    }
  }

  return (
    <div className={`primary-stat-card-container ${props.rootClassName} `}>
      <div className="primary-stat-card-container1">
        <div className="primary-stat-card-container2">
          <label className="primary-stat-card-text">Stats</label>
        </div>
        <div className="primary-stat-card-container3">
          <div className="primary-stat-card-container4">
            <div className="primary-stat-card-stats-row1">
              <div className="primary-stat-card-stat-block">
                <span className="primary-stat-card-text01">MOVE</span>
                <input
                  type="text"
                  id="moveStat_input"
                  value={displayValues.statMove}
                  className="primary-stat-card-textinput input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statMove', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statMove: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
              <div className="primary-stat-card-stat-block1">
                <span className="primary-stat-card-text02">Body</span>
                <input
                  type="text"
                  id="bodyStat_input"
                  value={displayValues.statBody}
                  className="primary-stat-card-textinput01 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statBody', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statBody: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
              <div className="primary-stat-card-stat-block2">
                <span className="primary-stat-card-text03">ref</span>
                <input
                  type="text"
                  id="refStat_input"
                  value={displayValues.statRef}
                  className="primary-stat-card-textinput02 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statRef', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statRef: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
              <div className="primary-stat-card-stat-block3">
                <span className="primary-stat-card-text04">dex</span>
                <input
                  type="text"
                  id="dexStat_input"
                  value={displayValues.statDex}
                  className="primary-stat-card-textinput03 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statDex', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statDex: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
            </div>
            <div className="primary-stat-card-stats-row2">
              <div className="primary-stat-card-stat-block4">
                <span className="primary-stat-card-text05">INT</span>
                <input
                  type="text"
                  id="intStat_input"
                  value={displayValues.statInt}
                  className="primary-stat-card-textinput04 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statInt', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statInt: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
              <div className="primary-stat-card-stat-block5">
                <span className="primary-stat-card-text06">WILL</span>
                <input
                  type="text"
                  id="willStat_input"
                  value={displayValues.statWill}
                  className="primary-stat-card-textinput05 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statWill', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statWill: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
              <div className="primary-stat-card-stat-block6">
                <span className="primary-stat-card-text07">COOL</span>
                <input
                  type="text"
                  id="coolStat_input"
                  value={displayValues.statCool}
                  className="primary-stat-card-textinput06 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statCool', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statCool: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
              <div className="primary-stat-card-stat-block7">
                <span className="primary-stat-card-text08">tech</span>
                <input
                  type="text"
                  id="techStat_input"
                  value={displayValues.statTech}
                  className="primary-stat-card-textinput07 input"
                  onBlur={(e) => handleNumberInput(e.target.value, 'statTech', 1, 20)}
                  onChange={(e) => setDisplayValues({...displayValues, statTech: parseFloat(e.target.value)})}
                  onFocus = {(e) => e.target.select()}
                />
              </div>
            </div>
            <div className="primary-stat-card-stats-row3">
              <div className="primary-stat-card-emp-stat-block">
                <span className="primary-stat-card-text09">EMP</span>
                <div className="primary-stat-card-container5">
                  <div className="primary-stat-card-container6">
                    <button className="primary-stat-card-button button">
                      +
                    </button>
                    <button className="primary-stat-card-button1 button">
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    id="currentEmpStat_input"
                    value={displayValues.statEmpCurrent}
                    className="primary-stat-card-textinput08 input"
                    onBlur={(e) => handleNumberInput(e.target.value, 'statEmpCurrent', 1, 20)}
                    onChange={(e) => setDisplayValues({...displayValues, statEmpCurrent: parseFloat(e.target.value)})}
                    onFocus = {(e) => e.target.select()}
                  />
                  <span className="primary-stat-card-text10">
                    <span className="">o</span>
                    <br className=""></br>
                    <span className="">f</span>
                    <br className=""></br>
                  </span>
                  <input
                    type="text"
                    id="maxEmpStat_input"
                    value={displayValues.statEmpMax}
                    className="primary-stat-card-textinput09 input"
                    onBlur={(e) => handleNumberInput(e.target.value, 'statEmpMax', 1, 20)}
                    onChange={(e) => setDisplayValues({...displayValues, statEmpMax: parseFloat(e.target.value)})}
                    onFocus = {(e) => e.target.select()}
                  />
                </div>
              </div>
              <div className="primary-stat-card-luck-stat-block">
                <span className="primary-stat-card-text15">luck</span>
                <div className="primary-stat-card-container7">
                  <div className="primary-stat-card-container8">
                    <button className="primary-stat-card-button2 button">
                      +
                    </button>
                    <button className="primary-stat-card-button3 button">
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    id="luckCurrent_input"
                    value={displayValues.statLuckCurrent}
                    className="primary-stat-card-textinput10 input"
                    onBlur={(e) => handleNumberInput(e.target.value, 'statLuckCurrent', 1, 20)}
                    onChange={(e) => setDisplayValues({...displayValues, statLuckCurrent: parseFloat(e.target.value)})}
                    onFocus = {(e) => e.target.select()}
                  />
                  <span className="primary-stat-card-text16">
                    <span className="">o</span>
                    <br className=""></br>
                    <span className="">f</span>
                    <br className=""></br>
                  </span>
                  <input
                    type="text"
                    id="maxLuckStat_input"
                    value={displayValues.statLuckMax}
                    className="primary-stat-card-textinput11 input"
                    onBlur={(e) => handleNumberInput(e.target.value, 'statLuckMax', 1, 20)}
                    onChange={(e) => setDisplayValues({...displayValues, statLuckMax: parseFloat(e.target.value)})}
                    onFocus = {(e) => e.target.select()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PrimaryStatCard.defaultProps = {
  statInt: 1,
  statCool: 1,
  statWill: 1,
  statMove: 1,
  rootClassName: '',
  statTech: 1,
  statDex: 1,
  statRef: 1,
  statBody: 1,
  statEmpCurrent: 1,
  statEmpMax: 1,
  statLuckCurrent: 1,
  statLuckMax: 1,
}



export default PrimaryStatCard
