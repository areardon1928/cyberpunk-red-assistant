import WeaponRow from './weapon-row'
import { FC, useEffect, useState } from 'react';

import './weapon-card.css'
import { pb } from '../../lib/pocketbase';
import { iteratorSymbol } from 'immer/dist/internal';
import EquippedWeapon from '../../types/weaponType';
interface WeaponCardProps {
  rootClassName: string;
  chracterId: string;
}

const WeaponCard:FC<WeaponCardProps> = (props) => {
  const [weaponData, setWeaponData] = useState<EquippedWeapon[]>([]);

  const updateWeaponData = (newWeaponData: EquippedWeapon, index: number) => {
    if (newWeaponData.name === weaponData[index].name) {
      const tempWeaponData = weaponData.map((w, i) => {
        if (i == index) {
          return newWeaponData
        } else {
          return w
        }
      })
      setWeaponData(tempWeaponData)
      pb.collection('equippedWeapons').update(newWeaponData.id, newWeaponData)
        .then((value) => {
          console.log('Successfullly updated weapon: ' + value)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    if (props.chracterId) {
      pb.collection('equippedWeapons').getList(undefined, undefined, {
        filter: `characterId = "${props.chracterId}"`,
        expand: 'weaponId',
        sort: 'created'
      }).then((value) => {
        const weaponArray = value.items.map((item) => { 
          return { ...item, ...item.expand.weaponId, id: item.id } as unknown as EquippedWeapon
         })
        setWeaponData(weaponArray)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [])

  return (
    <div className={`weapon-card-container ${props.rootClassName} `}>
    <div className="weapon-card-container1">
      <label className="weapon-card-text">weapons</label>
    </div>
    <div className="weapon-card-container2">
      <WeaponRow
        equippedWeapon={weaponData[0] ?? null}
        updateWeaponData={updateWeaponData}
        index={0}
        rootClassName="weapon-row-root-class-name"
      ></WeaponRow>
      <WeaponRow
        equippedWeapon={weaponData[1] ?? null}
        updateWeaponData={updateWeaponData}
        index={1}
        rootClassName="weapon-row-root-class-name1"
      ></WeaponRow>
      <WeaponRow
        equippedWeapon={weaponData[2] ?? null}
        updateWeaponData={updateWeaponData}
        index={2}
        rootClassName="weapon-row-root-class-name2"
      ></WeaponRow>
    </div>
  </div>
  )
}

WeaponCard.defaultProps = {
  rootClassName: '',
}



export default WeaponCard
