import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

import App from './App'
import './index.css'

firebase.initializeApp({
  apiKey: 'AIzaSyAErjh2fdlciBm7UjK1K343W9YrmETuIhY',
  authDomain: 'spidergram-c7cc8.firebaseapp.com',
  databaseURL: 'https://spidergram-c7cc8.firebaseio.com',
  projectId: 'spidergram-c7cc8',
  storageBucket: 'spidergram-c7cc8.appspot.com',
  messagingSenderId: '213334105146'
})

render(
  <App />,
  document.getElementById('root')
)
