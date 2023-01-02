import React, { FC, useEffect, useState } from 'react'

import './character-info-card1.css'

interface CharacterInfoCard1Props {
  rootClassName: any; 
  characterImage?: string | undefined; 
  age: number| undefined; 
  roleRank: number | undefined; 
  currentHumanity: number | undefined; 
  maxHumanity:  number | undefined;
  updateCharacterData: Function;
}

interface CharacterInfoCard1DisplayValues {
  age: number | undefined;
  roleRank: number | undefined;
  currentHumanity: number | undefined;
}


const CharacterInfoCard1:FC<CharacterInfoCard1Props> = (props) => {

  const [displayValues, setDisplayValues] = useState<CharacterInfoCard1DisplayValues>(props);

  
  const handleNumberInput = (value: string, field: string, min: number = 0, max: number = 100) => {
    if (value.trim() === '') {
      props.updateCharacterData(field, min)
    } 
    else {
      const numValue = parseFloat(value)
      console.log(numValue)
      if (!isNaN(numValue) && numValue >= min && numValue <= max && numValue !== props[field as keyof CharacterInfoCard1Props]) {
        props.updateCharacterData(field, numValue)
      } else {
        setDisplayValues({...displayValues, [field]: props[field as keyof CharacterInfoCard1Props]})
      }
    }
  }



  return (
    <div className={`character-info-card1-container ${props.rootClassName} `}>
      <div className="character-info-card1-container01">
        <div className="character-info-card1-image-container">
          <img
            alt="character portrait"
            src={props.characterImage}
            className="character-info-card1-image"
          />
        </div>
        <div className="character-info-card1-stats-container">
          <div className="character-info-card1-container02">
            <div className="character-info-card1-container03">
              <span className="character-info-card1-text">age</span>
            </div>
            <input
              type="text"
              id="age_input"
              value={displayValues.age}
              className="character-info-card1-textinput input"
              onBlur={(e) => handleNumberInput(e.target.value, 'age', 1, 100)}
              onChange={(e) => setDisplayValues({...displayValues, age: parseFloat(e.target.value)})}
              onFocus = {(e) => e.target.select()}
            />
            <div className="character-info-card1-container04">
              <span className="character-info-card1-text1">role_rank</span>
            </div>
            <input
              type="text"
              id="role_rank_input"
              value={displayValues.roleRank}
              className="character-info-card1-input input"
              onBlur={(e) => handleNumberInput(e.target.value, 'roleRank', 1, 10)}
              onChange={(e) => setDisplayValues({...displayValues, roleRank: parseFloat(e.target.value)})}
              onFocus = {(e) => e.target.select()}
            />
          </div>
          <div className="character-info-card1-container05"></div>
          <div className="character-info-card1-container06">
            <div className="character-info-card1-container07">
              <span className="character-info-card1-text2">humanity</span>
            </div>
            <input
              type="text"
              id="humanity_current_input"
              value={displayValues.currentHumanity}
              className="character-info-card1-textinput1 input"
              onBlur={(e) => handleNumberInput(e.target.value, 'currentHumanity', 0, 100)}
              onChange={(e) => setDisplayValues({...displayValues, currentHumanity: parseFloat(e.target.value)})}
              onFocus = {(e) => e.target.select()}
            />
            <div className="character-info-card1-container08">
              <span className="character-info-card1-text3">OUT OF</span>
            </div>
            <div className="character-info-card1-container09">
              <span className="character-info-card1-text4">
                {props.maxHumanity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CharacterInfoCard1.defaultProps = {
  maxHumanity: 0,
  characterImage:
    'https://i.pinimg.com/736x/19/40/81/19408136738c83bb07cc0c6ea2dcd0b4.jpg',
  currentHumanity: 0,
  age: 0,
  roleRank: 1,
  rootClassName: '',
}


export default CharacterInfoCard1
