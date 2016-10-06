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
				<Row id='topRow'>
					<Col xs={3} className='text-center'>
					</Col>
					<Col xs={6} className='text-center'>
						<ButtonGroup className='itemSelect'>
							<Button onClick={this.props.useFirstAid}className='itemSelect itemBtns'><img className='control-icons'src={firstAidIcon}/><span className='text'> {this.props.firstAid}</span></Button>
							<Button onClick={this.props.useSyringe}className='itemSelect itemBtns'><img className='control-icons'src={syringeIcon}/><span className='text'> {this.props.syringe}</span></Button>
							<Button onClick={this.props.useKey}className='itemSelect itemBtns'><img className='control-icons'src={keyIcon}/><span className='text'> {this.props.keys}</span></Button>
							<Button onClick={this.props.useMatch}className='itemSelect itemBtns'><img className='control-icons'src={matchesIcon}/><span className='text'> {this.props.matches}</span></Button>
							<Button onClick={this.props.useLighter}className='itemSelect itemBtns'><img className='control-icons'src={lighterIcon}/><span className='text'> {this.props.lighters}</span></Button>
							<Button onClick={this.props.useFlashlight}className='itemSelect itemBtns'><img className='control-icons'src={flashlightIcon}/><span className='text'> {this.props.flashlight}</span></Button>
						</ButtonGroup>
					</Col>
					<Col xs={3}></Col>
				</Row>
				<Row id='secondRow'>
					<Col xs={12} className='text-center'>
						<span className='text'><span className='control-icons'id='ek'>{this.props.enemiesKilled}</span> <span id='align-text'>enemies killed</span></span>
					</Col>
				</Row>
				<Row id='thirdRow'>
				</Row>
				<Row id='bottomRow'>
					<Col xs={3} className='text-right'>
						<span className='text'><img className='control-icons roundIconBorder'src={healthMeterIcon}/> {this.props.health}%</span>
					</Col>
					<Col xs={2} className='text-center'>
						<span className='text'><img className='control-icons roundIconBorder'src={this.props.weaponIcon}/> is equipped</span>
					</Col>
					<Col xs={2} className='text-center'>
						<span className='text'><img className='control-icons roundIconBorder'src={bodyArmorIcon}/> is {this.props.bodyArmor}</span>
					</Col>
					<Col xs={2} className='text-center'>
						<span className='text'><img className='control-icons roundIconBorder'src={shieldIcon}/> is {this.props.shield}</span>
					</Col>
					<Col xs={3} className='text-left'>
						<span className='text'><img className='control-icons roundIconBorder'src={gasMaskIcon}/> is {this.props.gasMask}</span>
					</Col>
				</Row>	
			</div>
			)
		}
	}
export default Controls