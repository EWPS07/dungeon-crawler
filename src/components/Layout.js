import React from 'react'
import ReactDOM from 'react-dom'
//game components --------------
import GameStateController from './GameStateController'

// react-bootstrap components -----


class Layout extends React.Component {
	render() {
		return(
			<div id='Layout'>
				<GameStateController/>
			</div>
		)
	}
}

export default Layout