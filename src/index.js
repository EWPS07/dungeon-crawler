import React from 'react'
import ReactDOM from 'react-dom'
import styles from './assets/styles/styles.scss'
import KeyHandler, {KEYPRESS, KEYDOWN, KEYUP} from 'react-key-handler'

import Layout from './components/Layout'

ReactDOM.render(<Layout/>, document.getElementById('app'))