import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './lib/store'

import './style.css'
import CharacterSheet from './views/character-sheet'
import Login from './views/login'


function App() {

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
              <Route element={<Login />} index />
              <Route element={<CharacterSheet />} path = "/character" />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
