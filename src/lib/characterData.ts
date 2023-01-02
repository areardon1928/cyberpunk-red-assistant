import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import Character from "../types/characterType"

export interface CharacterDataState {
  characterData: Character | undefined
}

const initialState: CharacterDataState = {
  characterData: undefined
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacterData: (state, action: PayloadAction<any>) => {
      state.characterData = action.payload
    },
    updateCharacterData: (state, action: PayloadAction<any>) => {
      if (state.characterData) {
        //(state.characterData as any)[action.payload.field] 
      }
    }
  }
})

export const {setCharacterData} = characterSlice.actions

export default characterSlice.reducer