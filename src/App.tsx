import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import {store} from './lib/store'

import './style.css'
import CharacterSheet from './views/character-sheet'
import Login from './views/login'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route element={<Login />} index />
            <Route element={<CharacterSheet />} path = "/character" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
