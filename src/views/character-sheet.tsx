import React, { FC, useEffect, useLayoutEffect, useState } from 'react'

import {isEqual} from 'lodash'
import { Helmet } from 'react-helmet'

import NameBanner from '../components/name-banner'
import CharacterInfoCard1 from '../components/character-info-card1'
import HealthCard from '../components/health-card'
import PrimaryStatCard from '../components/primary-stat-card'
import './character-sheet.css'
import { pb } from '../lib/pocketbase'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/store'
import { useNavigate } from 'react-router-dom'
import Character from '../types/characterType'
import { isImportEqualsDeclaration } from 'typescript'

const CharacterSheet:FC = () => {
  // pb.authStore.clear()
  // console.log(pb.authStore.model)
  const user = useSelector((state: RootState) => state.user.userData)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true)
  const [characterData, setCharacterData] = useState<Character>();

  const updateCharacterData = (field: string, newValue: any) => {
    console.log('firing update: ' + field + ' ' + newValue)
    if (characterData && field in characterData) {
      setCharacterData({...characterData, [field]: newValue})
    }
  }

  useEffect(() => {
    console.log('current user: ' + JSON.stringify(user))
    if (!user) {
      navigate("/")
    }
    pb.collection('characters').getList(undefined, undefined, {
      filter: `user_id = "${user.id}"`
    }).then((value) => {
      setLoading(false)
      setCharacterData(value.items[0] as unknown as Character);
    }).catch((err) => {
      console.log(err)
    })
  }, [navigate, user])

  useEffect(() => {
    if (characterData) {
        console.log(characterData)
        pb.collection('characters').update(characterData.id, characterData)
          .then((value) => {
            console.log('Successfully updated character: ', value)
          })
          .catch((err) => {
            console.log(err)
          })
      }
  }, [characterData])


  return (
    <div className="character-sheet-container">
    <Helmet>
      <title>Cyberpunk Character App</title>
      <meta property="og:title" content="Cyberpunk Character App" />
    </Helmet>
    {!loading && characterData &&

        <div className="character-sheet-container1">
          <div className="character-sheet-container2">
            <NameBanner 
              role={characterData.role_id} 
              name={characterData.name} 
              updateCharacterData={updateCharacterData} 
              rootClassName="name-banner-root-class-name"
            />
            <CharacterInfoCard1 
              updateCharacterData={updateCharacterData} 
              age={characterData.age} 
              roleRank={characterData.roleRank} 
              maxHumanity={characterData.maxHumanity} 
              currentHumanity={characterData.currentHumanity}
              characterImage={characterData.avatar} 
              rootClassName="character-info-card1-root-class-name"
            />
          </div>
          <HealthCard 
            rootClassName="health-card-root-class-name"
            bodyInjury1={characterData.bodyInjury1}
            bodyInjury2={characterData.bodyInjury2}
            headInjury={characterData.headInjury}
            addiction1={characterData.addiction1}
            addiction2={characterData.addiction2}
            addiction3={characterData.addiction3}
            addiction4={characterData.addiction4}
          />
          <PrimaryStatCard
            updateCharacterData={updateCharacterData}
            statInt={characterData.statInt}
            statMove={characterData.statMove}
            statBody={characterData.statBody}
            statCool={characterData.statCool}
            statDex={characterData.statDex}
            statEmpCurrent={characterData.statEmpCurrent}
            statEmpMax={characterData.statEmpMax}
            statLuckCurrent={characterData.statLuckCurrent}
            statLuckMax={characterData.statLuckMax}
            statRef={characterData.statRef}
            statTech={characterData.statTech}
            statWill={characterData.statWill}
            rootClassName="primary-stat-card-root-class-name"
          />
        </div>

    }
    {loading &&
      <h1>LOADING</h1>
    }
      </div>
  )
}

export default CharacterSheet
