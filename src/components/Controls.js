import React from 'react'
import ReactDOM from 'react-dom'

// react-bootsrap ----------
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'

let healthMeterIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/healthMeter.png')
let bodyArmorIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/body-armor.png')
let shieldIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/shield.png')
let gasMaskIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/gasMask.png')
let keyIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/key.png')
let matchesIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/matches.png')
let lighterIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/lighter.png')
let flashlightIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/flashlight.png')
let bossKeyIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/bossKey.png')
let firstAidIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/firstAid.png')
let syringeIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-493-medicine@3x.png')
let elixirIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/elixir.png')

class Controls extends React.Component {
	render() {
		return(
			<div id='controls'>
				<Row className='text-center control-row'>
					<Button id='playBtn'onClick={this.props.play}>Play Now</Button>
				</Row>
				<Row className='control-row'>
					<Col xs={2} className='text-center'>
						<span className='text'><img className='control-icons'src={healthMeterIcon}/> {this.props.health}%</span>
					</Col>
					<Col xs={2} className='text-right'>
						<img className='control-icons'src={this.props.weaponIcon}/>
					</Col>
					<Col xs={2} className='text-center'>
						<span className='text'><img className='control-icons'src={bodyArmorIcon}/> is {this.props.bodyArmor}</span>
					</Col>
					<Col xs={2} className='text-center'>
						<span className='text'><img className='control-icons'src={shieldIcon}/> is {this.props.shield}</span>
					</Col>
					<Col xs={2} className='text-left'>
						<span className='text'><img className='control-icons'src={gasMaskIcon}/> is {this.props.gasMask}</span>
					</Col>
					<Col xs={2} className='text-center'>
						<span className='text'><span id='ek'>{this.props.enemiesKilled}</span> enemies killed</span>
					</Col>
				</Row>
				<Row id='bottomRow'className='control-row'>
					<Col xs={12} className='text-center'>
						<ButtonGroup>
							<Button className='itemBtns'><img className='control-icons'src={firstAidIcon}/><span className='text'> {this.props.firstAid}</span></Button>
							<Button className='itemBtns'><img className='control-icons'src={syringeIcon}/><span className='text'> {this.props.syringe}</span></Button>
							<Button className='itemBtns'><img className='control-icons'src={keyIcon}/><span className='text'> {this.props.keys}</span></Button>
							<Button className='itemBtns'><img className='control-icons'src={matchesIcon}/><span className='text'> {this.props.matches}</span></Button>
							<Button className='itemBtns'><img className='control-icons'src={lighterIcon}/><span className='text'> {this.props.lighters}</span></Button>
							<Button className='itemBtns'><img className='control-icons'src={flashlightIcon}/><span className='text'> {this.props.flashlight}</span></Button>
						</ButtonGroup>
					</Col>
				</Row>
					
			</div>
			)
		}
	}
export default Controls