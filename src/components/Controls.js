import React from 'react'
import ReactDOM from 'react-dom'

// react-bootsrap ----------
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'


class Controls extends React.Component {
	render() {
		return(
			<div onChange={this.props.healthNotification} id='controls'>
				<Button onClick={this.props.play}>Play</Button>
				<div onClick={this.props.use} id='playerStats'>
					<Row id='health'>
						<Col className='text-center'xs={6}>
							<img className='control-icons' id='healthMeter'src={require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/healthMeter.png')}/>
						</Col>
						<Col xs={6}><span>{this.props.health}%</span></Col>
					</Row>
					<Row id='items'>
						<Col xs={12}>Items</Col>
						<Col xs={12}>
							{
								this.props.items.map(function(item, index) {
									return(
										<Panel key={index} header={item}>
											<Button>Use</Button>
										</Panel>
									)
								})
							}
						</Col>
					</Row>
					<Row id='weapon'>
						<Col xs={12}>Weapon</Col>
						<Col xs={12}>
							<img className='control-icons'src={this.props.weaponIcon}/>
						</Col>
					</Row>
					<Row id='bodyArmor'>
						<Col className='text-center' xs={6}>
							<img className='control-icons' src={require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/body-armor.png')}/>
						</Col>
						<Col xs={6}>{this.props.bodyArmor}</Col>
					</Row>
					<Row id='shield'>
						<Col className='text-center' xs={6}>
							<img className='control-icons' src={require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/shield.png')}/>
						</Col>
						<Col xs={6}>{this.props.shield}</Col>
					</Row>
					<Row id='gasMask'>
						<Col className='text-center' xs={6}>
							<img className='control-icons' src={require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/gasMask.png')}/>
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