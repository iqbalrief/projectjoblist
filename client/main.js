import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './assets/styles/index.css';
import './assets/styles/react-datepicker.min.css';



hydrate(<App/>, document.getElementById('root'))
