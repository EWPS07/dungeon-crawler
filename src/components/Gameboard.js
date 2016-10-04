import React from 'react'
import ReactDOM from 'react-dom'
import KeyHandler, {KEYPRESS, KEYDOWN, KEYUP} from 'react-key-handler'
// app components ---------

// react-bootstrap ------------------
import Row from '../../node_modules/react-bootstrap/lib/Row'	
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'

let playerIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/activeCharacter.png')
let crazyInmateIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/crazyInmate.png')
let guardDogsIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-3-dog@3x.png')
let guardIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/guard.png')
let executionerIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/executioner.png')
let bossIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/boss.png')
let keyIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/key.png')
let matchesIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/matches.png')
let lighterIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/lighter.png')
let flashlightIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/flashlight.png')
let lockedDoorIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/lockedDoor.png')
let unlockedDoorIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/unlockedDoor.png')
let bulletsIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-282-bullets@3x.png')
let elixirIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/elixir.png')
let bossKeyIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/bossKey.png')
let bodyArmorIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/body-armor.png')
let shieldIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/shield.png')
let gasMaskIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/gasMask.png')
let firstAidIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/firstAid.png')
let healingStationIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-299-hospital@3x.png')
let syringeIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-493-medicine@3x.png')
let knifeIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/knife.png')
let pistolIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/pistol.png')
let axIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-314-ax@3x.png')
let rifleIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/rifle.png')


class Gameboard extends React.Component {
	render() {
		let activeRow = this.props.activeRow
		let activeCol = this.props.activeCol
		return(
			<div id='board'>
				<KeyHandler keyEventName={KEYDOWN} keyValue="ArrowUp" 	 onKeyHandle={this.props.upArrow}/>
				<KeyHandler keyEventName={KEYDOWN} keyValue="ArrowDown"  onKeyHandle={this.props.downArrow}/>
				<KeyHandler keyEventName={KEYDOWN} keyValue="ArrowRight" onKeyHandle={this.props.rightArrow}/>
				<KeyHandler keyEventName={KEYDOWN} keyValue="ArrowLeft"  onKeyHandle={this.props.leftArrow}/>
				<KeyHandler keyEventName={KEYDOWN} keyValue=" " 	     onKeyHandle={this.props.interact}/>
				{
					this.props.level.map(function(row, index) {
						let currRow = index
						return(
							<Row className='boardRow'key={index}>
								{
									row.map(function(col, index) {
										let block = index
										if(currRow === activeRow && block === activeCol) {
											if(col.gas === true) {
												return(
													<div className='boardBlock activeBlock gas'key={index}><img className='icons' src={playerIcon}/></div>
												)
											}
											else {
												return(
													<div className='boardBlock activeBlock'key={index}><img className='icons' src={playerIcon}/></div>
												)
											}
										}

										if(col.content === 'r') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}></div>
													)
												}	
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}></div>
													)
												}	
											}
										}


										// enemy rendering
										if(col.content === 'crazyInmate') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={crazyInmateIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={crazyInmateIcon}/></div>
													)
												}	
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={crazyInmateIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={crazyInmateIcon}/></div>
													)
												}
											}
										}


										if(col.content === 'guardDogs') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={guardDogsIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={guardDogsIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={guardDogsIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={guardDogsIcon}/></div>
													)
												}	
											}
										}


										if(col.content === 'guard') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={guardIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={guardIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={guardIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={guardIcon}/></div>
													)
												}	
											}
										}


										if(col.content === 'executioner') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={executionerIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={executionerIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={executionerIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={executionerIcon}/></div>
													)
												}
											}
										}


										if(col.content === 'boss') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons' src={bossIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons' src={bossIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark' src={bossIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark' src={bossIcon}/></div>
													)
												}
											}
										}


										// item rendering
										if(col.content === 'key') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={keyIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={keyIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={keyIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={keyIcon}/></div>
													)
												}
											}
										}


										if(col.content === 'matches') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={matchesIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={matchesIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={matchesIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={matchesIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'lighter') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={lighterIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={lighterIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={lighterIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={lighterIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'flashLight') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={flashlightIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={flashlightIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={flashlightIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={flashlightIcon}/></div>
													)
												}
											}
										}


										// special item rendering --------------
										if(col.content === 'lockedDoor') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas' key={index}><img className='icons' src={lockedDoorIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock' key={index}><img className='icons' src={lockedDoorIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark' key={index}><img className='icons inDark' src={lockedDoorIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark' key={index}><img className='icons inDark' src={lockedDoorIcon}/></div>
													)
												}
											}
										}

										if(col.content === 'unlockedDoor') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas' key={index}><img className='icons' src={unlockedDoorIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock' key={index}><img className='icons' src={unlockedDoorIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark' key={index}><img className='icons inDark' src={unlockedDoorIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark' key={index}><img className='icons inDark' src={unlockedDoorIcon}/></div>
													)
												}
											}
										}

										if(col.content === 'specialAmmo') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas' key={index}><img className='icons' src={bulletsIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock' key={index}><img className='icons' src={bulletsIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark' key={index}><img className='icons inDark' src={bulletsIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark' key={index}><img className='icons inDark' src={bulletsIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'elixir') {
											if(col.dark === false) {
									        	if(col.gas === true) {
													return(	
														<div className='boardBlock gas'key={index}><img className='icons'src={elixirIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock'key={index}><img className='icons'src={elixirIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={elixirIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={elixirIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'bossKey') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={bossKeyIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={bossKeyIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={bossKeyIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={bossKeyIcon}/></div>
													)
												}
											}
											
										}


										// protection rendering
										if(col.content === 'bodyArmor') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas'key={index}><img className='icons'src={bodyArmorIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock'key={index}><img className='icons'src={bodyArmorIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={bodyArmorIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={bodyArmorIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'shield') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas'key={index}><img className='icons'src={shieldIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock'key={index}><img className='icons'src={shieldIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={shieldIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={shieldIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'gasMask') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas'key={index}><img className='icons'src={gasMaskIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock'key={index}><img className='icons'src={gasMaskIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(	
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={gasMaskIcon}/></div>
													)
												}
												else {
													return(	
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={gasMaskIcon}/></div>
													)
												}
											}
											
										}


										// health rendering
										if(col.content === 'firstAid') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={firstAidIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={firstAidIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={firstAidIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={firstAidIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'healingStation') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={healingStationIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={healingStationIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={healingStationIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={healingStationIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'syringe') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={syringeIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={syringeIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={syringeIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={syringeIcon}/></div>
													)
												}
											}
											
										}
								

										// weapon rendering
										if(col.content === 'knife') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons' src={knifeIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons' src={knifeIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark' src={knifeIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark' src={knifeIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'pistol') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={pistolIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={pistolIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={pistolIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={pistolIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'ax') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={axIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={axIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={axIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={axIcon}/></div>
													)
												}
											}
											
										}


										if(col.content === 'rifle') {
											if(col.dark === false) {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas'key={index}><img className='icons'src={rifleIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock'key={index}><img className='icons'src={rifleIcon}/></div>
													)
												}
											}
											else {
												if(col.gas === true) {
													return(
														<div className='boardBlock gas dark'key={index}><img className='icons inDark'src={rifleIcon}/></div>
													)
												}
												else {
													return(
														<div className='boardBlock dark'key={index}><img className='icons inDark'src={rifleIcon}/></div>
													)
												}
											}
										}
										else {
											return(
												<div className='boardBlock wall'key={index}></div>
											)
										}
									})
								}
							</Row>
						)
					})
				}
			</div>
		)
	}
}

export default Gameboard