import React from 'react'
import ReactDOM from 'react-dom'

// react-bootsrap ----------
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
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

class Controls extends React.Component {
	render() {
		let use = this.props.use
		return(
			<div onChange={this.props.healthNotification} id='controls'>
				<Button onClick={this.props.play}>Play</Button>
				<div id='playerStats'>
					<Row id='health'>
						<Col className='text-center'xs={6}>
							<img className='control-icons' id='healthMeter'src={healthMeterIcon}/>
						</Col>
						<Col xs={6}><span>{this.props.health}%</span></Col>
					</Row>
					<Row id='items'>
						<Col xs={12}>Items</Col>
					</Row>
					<Row>
						<Col xs={4}><img className='items-icons'src={matchesIcon}/></Col>
						<Col xs={4}>{this.props.matches}</Col>
						<Col xs={4}><Button>Use</Button></Col>
					</Row>
					<Row>
						<Col xs={4}><img className='items-icons'src={lighterIcon}/></Col>
						<Col xs={4}>{this.props.lighters}</Col>
						<Col xs={4}><Button>Use</Button></Col>
					</Row>
					<Row>
						<Col xs={4}><img className='items-icons'src={flashlightIcon}/></Col>
						<Col xs={4}>{this.props.flashlight}</Col>
						<Col xs={4}><Button>Use</Button></Col>
					</Row>
					<Row>
						<Col xs={4}><img className='items-icons'src={firstAidIcon}/></Col>
						<Col xs={4}>{this.props.firstAid}</Col>
						<Col xs={4}><Button>Use</Button></Col>
					</Row>
					<Row>
						<Col xs={4}><img className='items-icons'src={syringeIcon}/></Col>
						<Col xs={4}>{this.props.syringe}</Col>
						<Col xs={4}><Button>Use</Button></Col>
					</Row>
					<Row>
						<Col xs={4}><img className='items-icons'src={keyIcon}/></Col>
						<Col xs={4}>{this.props.keys}</Col>
						<Col xs={4}><Button>Use</Button></Col>
					</Row>
					<Row id='weapon'>
						<Col xs={12}>Weapon</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<img className='control-icons'src={this.props.weaponIcon}/>
						</Col>
					</Row>
					<Row id='bodyArmor'>
						<Col className='text-center' xs={6}>
							<img className='control-icons' src={bodyArmorIcon}/>
						</Col>
						<Col xs={6}>{this.props.bodyArmor}</Col>
					</Row>
					<Row id='shield'>
						<Col className='text-center' xs={6}>
							<img className='control-icons' src={shieldIcon}/>
						</Col>
						<Col xs={6}>{this.props.shield}</Col>
					</Row>
					<Row id='gasMask'>
						<Col className='text-center' xs={6}>
							<img className='control-icons' src={gasMaskIcon}/>
						</Col>
						<Col xs={6}>{this.props.gasMask}</Col>
					</Row>
					<Row id='enemiesKilled'>
						<Col xs={6}>Enemies Killed</Col>
						<Col xs={6}>{this.props.enemiesKilled}</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Controls