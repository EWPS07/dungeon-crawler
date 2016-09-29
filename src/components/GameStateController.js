import React from 'react'
import ReactDOM from 'react-dom'
import KeyHandler, {KEYPRESS, KEYDOWN, KEYUP} from 'react-key-handler'

// app components ---------------
import Gameboard from './Gameboard'
import Controls from './Controls'

// react-boostrap components
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class GameStateController extends React.Component {
	constructor() {
		super()
		this.state={level: [],
			activeRow: 0,
			activeCol:0,
			playerStats: {
				health: 100,
				items: [],
				bodyArmor: 'unequiped',
				bodyArmorIcon: undefined,
				shield: 'unequiped',
				shieldIcon: undefined,
				gasMask: 'unequiped',
				gasMaskIcon: undefined,
				weapon: 'fists',
				weaponIcon: require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/fists.png'),
				special: [],
				enemiesKilled: 0
			},
			actionObject: undefined
		}
	}

	// FIRST LEVEL CREATION ---------------------------------------------
	levelOne(e) {
		var Square = function(content, gas, dark) {
			this.content = content;
			this.gas = gas;
			this.dark = dark;
		}

		let levelOne = []
		for(var i=0;i<100;i++) {
			levelOne.push([])
		}
		for(var j=0;j<levelOne.length;j++) {
			for(var k=0;k<100;k++) {
				levelOne[j].push(new Square('w', false, true))
			}
		}
		// room creation ---------------
		// entrance -------------
		for(var r=0;r<6;r++) {
			for(var R=0;R<10;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		
		// HALLWAYS ------------------------
		// verticle hallways ---------
		for(var r=11;r<90;r++) {
			for(var R=11;R<14;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=11;r<90;r++) {
			for(var R=87;R<90;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=14;r<30;r++) {
			for(var R=40;R<43;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		//horizontal hallways --------
		for(var r=87;r<90;r++) {
			for(var R=14;R<90;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=7;r<10;r++) {
			for(var R=14;R<90;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=11;r<14;r++) {
			for(var R=40;R<89;R++) {
				levelOne[r][R].content = 'r'
			}
		}

		// hallway to boss room ---------
		for(var r=40;r<43;r++) {
			for(var R=14;R<32;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		// twin hallway to boss room
		for(var r=54;r<57;r++) {
			for(var R=14;R<32;R++) {
				levelOne[r][R].content = 'r'
			}
		}

		// ROOMS ------------------------------------
		// create first room -----------
		for(var r=5;r<12;r++) {
			for(var R=9;R<29;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		// create boss room -------------
		for(var r=32;r<65;r++) {
			for(var R=32;R<65;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=47;r<49;r++) {
			for(var R=35;R<62;R++) {
				levelOne[r][R].content = 'w'
			}
		}
		// cells--------------------
		for(var r=20;r<21;r++) {
			for(var R=86;R<87;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=15;r<26;r++) {
			for(var R=70;R<86;R++) {
				levelOne[r][R].content = 'r'
			}
		}

		for(var r=35;r<36;r++) {
			for(var R=86;R<87;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=30;r<41;r++) {
			for(var R=70;R<86;R++) {
				levelOne[r][R].content = 'r'
			}
		}

		for(var r=50;r<51;r++) {
			for(var R=86;R<87;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=45;r<56;r++) {
			for(var R=70;R<86;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		
		for(var r=65;r<66;r++) {
			for(var R=86;R<87;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=60;r<71;r++) {
			for(var R=70;R<86;R++) {
				levelOne[r][R].content = 'r'
			}
		}

		for(var r=80;r<81;r++) {
			for(var R=86;R<87;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=75;r<86;r++) {
			for(var R=70;R<86;R++) {
				levelOne[r][R].content = 'r'
			}
		}

		// offices -------------------
		for(var r=75;r<87;r++) {
			for(var R=15;R<17;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=75;r<77;r++) {
			for(var R=15;R<25;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=70;r<82;r++) {
			for(var R=25;R<67;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=70;r<82;r++) {
			for(var R=62;R<63;R++) {
				levelOne[r][R].content = 'w'
			}
			levelOne[75][62].content = 'r'
		}
		for(var r=76;r<77;r++) {
			for(var R=28;R<63;R++) {
				levelOne[r][R].content = 'w'
			}
		}
		for(var r=21;r<23;r++) {
			for(var R=43;R<47;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=15;r<29;r++) {
			for(var R=47;R<65;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		for(var r=15;r<29;r++) {
			for(var R=10;R<35;R++) {
				levelOne[r][R].content = 'r'
			}
		}
		levelOne[90][89].content = 'r'


		// gas blocks -----------------------
		for(var g=32;g<35;g++) {
			for(var G=36;G<60;G++) {
				levelOne[g][G].gas = true
			}
		}
		for(var g=35;g<38;g++) {
			for(var G=32;G<60;G++) {
				levelOne[g][G].gas = true
			}
		}
		for(var g=38;g<39;g++) {
			for(var G=36;G<60;G++) {
				levelOne[g][G].gas = true
			}
		}
		for(var g=39;g<44;g++) {
			for(var G=40;G<58;G++) {
				levelOne[g][G].gas = true
			}
		}


		var stuff = [
			[8, 26],
			[11, 9],
			[25, 26],
			[26, 34],
			[50, 45],
			[60, 62],
			[70, 51],
			[79, 64],
			[75, 65],
			[79, 83],
			[81, 72],
			[65, 78],
			[35, 78],
			[35, 71],
			[47, 74],
			[26, 60],
			[17, 70],
			[78, 15],
			[89, 11],
			[80, 61],
			[64, 32],
			[55, 43],
			[36, 43],
			[39, 11],
			[25, 50],
			[28, 55],
			[16, 20],
			[22, 33],
			[21, 42],
			[54, 22],
			[75, 19],
			[10, 27],
			[35, 12],
			[76, 18],
			[88, 37],
			[38, 75],
			[38, 80],
			[55, 75],
			[69, 78],
			[75, 75],
			[82, 70],
			[46, 58],
			[45, 38],
			[30, 70],
			[80, 37],
			[76, 23],
			[56, 64],
			[12, 89],
			[33, 89],
			[79, 89],
			[18, 78],
			[20, 75],
			[18, 72],
			[22, 73],
			[18, 80],
			[26, 60],
			[21, 44],
			[73, 12],
			[64, 12],
			[50, 12],
			[4, 4],
			[5, 5]
		]

		// populate enemies --------
		// crazy inmate
		for(var e=1;e<=10;e++) {
			let enemyIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newEnemy = stuff[enemyIndex]
			levelOne[newEnemy[[0]]][newEnemy[1]].content = 'crazyInmate'
			stuff.splice(enemyIndex, 1)
		}

		// guard dogs
		for(var e=1;e<=5;e++) {
			let enemyIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newEnemy = stuff[enemyIndex]
			levelOne[newEnemy[[0]]][newEnemy[1]].content = 'guardDogs'
			stuff.splice(enemyIndex, 1)
		}

		// guard
		for(var e=1;e<=5;e++) {
			let enemyIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newEnemy = stuff[enemyIndex]
			levelOne[newEnemy[[0]]][newEnemy[1]].content = 'guard'
			stuff.splice(enemyIndex, 1)
		}

		// executioner
		for(var e=1;e<=2;e++) {
			let enemyIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newEnemy = stuff[enemyIndex]
			levelOne[newEnemy[[0]]][newEnemy[1]].content = 'executioner'
			stuff.splice(enemyIndex, 1)
		}

		// boss
		levelOne[89][89].content = 'boss'


		// populate health --------
		// first aid pack
		for(var h=1;h<=8;h++) {
			let healthIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newHealth = stuff[healthIndex]
			levelOne[newHealth[[0]]][newHealth[1]].content = 'firstAid'
			stuff.splice(healthIndex, 1)
		}

		// healing station
		for(var h=1;h<=4;h++) {
			let healthIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newHealth = stuff[healthIndex]
			levelOne[newHealth[[0]]][newHealth[1]].content = 'healingStation'
			stuff.splice(healthIndex, 1)
		}

		// syringes
		for(var h=1;h<=2;h++) {
			let healthIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newHealth = stuff[healthIndex]
			levelOne[newHealth[[0]]][newHealth[1]].content = 'syringe'
			stuff.splice(healthIndex, 1)
		}

		// poplate protection
		for(var i=1;i<=3;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'bodyArmor'
			stuff.splice(itemIndex, 1)
		}
		for(var i=1;i<=3;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'shield'
			stuff.splice(itemIndex, 1)
		}
		for(var i=1;i<=1;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'gasMask'
			stuff.splice(itemIndex, 1)
		}

		// matches
		for(var i=1;i<=5;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'matches'
			stuff.splice(itemIndex, 1)
		}

		// lighters
		for(var i=1;i<=2;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'lighter'
			stuff.splice(itemIndex, 1)
		}

		// flashlights
		for(var i=1;i<=1;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'flashLight'
			stuff.splice(itemIndex, 1)
		}

		// keys
		for(var i=1;i<=2;i++) {
			let itemIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newItem = stuff[itemIndex]
			levelOne[newItem[[0]]][newItem[1]].content = 'key'
			stuff.splice(itemIndex, 1)
		}

		// special items --------------------------
		// locked doors -------------------
		levelOne[75][62].content = 'lockedDoor'
		levelOne[90][89].content = 'lockedDoor'
		levelOne[20][86].content = 'lockedDoor'

		// special rifle ammunition ------------
		levelOne[77][64].content = 'specialAmmo'

		// magic health elixir ----------------
		levelOne[25][70].content = 'elixir'

		

		// populate weapons -------
		// knives
		for(var wp=1;wp<=3;wp++) {
			let weaponIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newWeapon = stuff[weaponIndex]
			levelOne[newWeapon[[0]]][newWeapon[1]].content = 'knife' 
			stuff.splice(weaponIndex, 1)
		}
		// axes
		for(var wp=1;wp<=2;wp++) {
			let weaponIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newWeapon = stuff[weaponIndex]
			levelOne[newWeapon[[0]]][newWeapon[1]].content = 'ax'
			stuff.splice(weaponIndex, 1)
		}
		// pistols
		for(var wp=1;wp<=3;wp++) {
			let weaponIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newWeapon = stuff[weaponIndex]
			levelOne[newWeapon[[0]]][newWeapon[1]].content = 'pistol'
			stuff.splice(weaponIndex, 1)
		}
		// rifle
		for(var wp=1;wp<=1;wp++) {
			let weaponIndex = Math.floor(Math.random()*((stuff.length-1)-0+1)+0);
			let newWeapon = stuff[weaponIndex]
			levelOne[newWeapon[[0]]][newWeapon[1]].content = 'rifle'
			stuff.splice(weaponIndex, 1)
		}
		this.setState({level: levelOne})
		this.setState({activeRow: 32, activeCol: 32})
	}



	// PLAYER MOVEMENT WITH ARROWS --------------------------------------------------
	// lock player to enemy ----------------------
	forceFight(e) {
		if(this.state.level[this.state.activeRow][this.state.activeCol].content == 'crazyInmate' ||
			this.state.level[this.state.activeRow][this.state.activeCol].content == 'guardDogs' ||
			this.state.level[this.state.activeRow][this.state.activeCol].content == 'guard' ||
			this.state.level[this.state.activeRow][this.state.activeCol].content == 'executioner' ||
			this.state.level[this.state.activeRow][this.state.activeCol].content == 'boss') {
				return true
		}
	}

	// left arrow movement -----------------------
	leftArrow(e) {
		e.preventDefault()
		if(this.state.activeCol>0) {
			if(this.forceFight() === true) {
				this.setState({activeRow: this.state.activeRow, activeCol: this.state.activeCol})
			}
			else {
				if(this.state.level[this.state.activeRow][this.state.activeCol-1].content !== 'w') {
					this.setState({actionObject: this.state.level[this.state.activeRow][this.state.activeCol-1].content})
					this.setState({activeCol: this.state.activeCol-1})
				}
			}
			if(this.state.level[this.state.activeRow][this.state.activeCol].gas === true) {
				if(this.state.playerStats.gasMask === 'unequiped') {
					this.state.playerStats.health-=5
					this.setState({playerStats: this.state.playerStats})
				}
			}
		}
	}

	// right arrow movement ----------------------
	rightArrow(e) {
		e.preventDefault()
		if(this.state.activeCol<99) {
			if(this.forceFight() === true) {
				this.setState({activeRow: this.state.activeRow, activeCol: this.state.activeCol})
			}
			else {
				if(this.state.level[this.state.activeRow][this.state.activeCol+1].content !== 'w') {
					this.setState({actionObject: this.state.level[this.state.activeRow][this.state.activeCol+1].content})
					this.setState({activeCol: this.state.activeCol+1})
				}
			}
			if(this.state.level[this.state.activeRow][this.state.activeCol].gas === true) {
				if(this.state.playerStats.gasMask === 'unequiped') {
					this.state.playerStats.health-=5
					this.setState({playerStats: this.state.playerStats})
				}
			}
		}
	}

	// up arrow movement --------------------------
	upArrow(e) {
		e.preventDefault()
		if(this.state.activeRow>0) {
			if(this.forceFight() === true) {
				this.setState({activeRow: this.state.activeRow, activeCol: this.state.activeCol})
			}
			else {
				if(this.state.level[this.state.activeRow-1][this.state.activeCol].content !== 'w') {
					this.setState({actionObject: this.state.level[this.state.activeRow-1][this.state.activeCol].content})
					this.setState({activeRow: this.state.activeRow-1})
				}
			}
			if(this.state.level[this.state.activeRow][this.state.activeCol].gas === true) {
				if(this.state.playerStats.gasMask === 'unequiped') {
					this.state.playerStats.health-=5
					this.setState({playerStats: this.state.playerStats})
				}
			}
		}
	}

	// down arrow movement ------------------------
	downArrow(e) {
		e.preventDefault()
		if(this.state.activeRow<99) {
			if(this.forceFight() === true) {
				this.setState({activeRow: this.state.activeRow, activeCol: this.state.activeCol})
			}
			else {
				if(this.state.level[this.state.activeRow+1][this.state.activeCol].content !== 'w') {
					this.setState({actionObject: this.state.level[this.state.activeRow+1][this.state.activeCol].content})
					this.setState({activeRow: this.state.activeRow+1})
				}
			}
			if(this.state.level[this.state.activeRow][this.state.activeCol].gas === true) {
				if(this.state.playerStats.gasMask === 'unequiped') {
					this.state.playerStats.health-=5
					this.setState({playerStats: this.state.playerStats})
				}
			}
		}
	}

	// PLAYER INTERACTIONS -----------------------------------------------------------
	// pick up items ---------------------------------
	pickup() {
		if(this.state.actionObject !== 'healingStation') {
			this.state.playerStats.items.push(this.state.actionObject)
			this.state.playerStats.items.sort()
			this.state.level[this.state.activeRow][this.state.activeCol].content = 'r'
			this.setState({level: this.state.level})
		}
	}

	// use items --------------------------------------
	use() {
		var Item = function (name, action) {
			this.name = name;
			this.action = action;
		}
		var Health = function(name, healthAmnt, type) {
			this.name = name;
			this.healthAmnt = healthAmnt;
			this.type = type;
		}

		// items -----------------------------
		var matches = new Item('matches', illuminate(5, 6000))
		var lighter = new Item('lighter', illuminate(5, 10000))
		var flashLight = new Item('flashLight', illuminate(10, ''))
		var key = new Item('key', open)

		// health types -------------------------
		var firstAid = new Health('firstAid', 15, 'health')
		var syringe = new Health('syringe', stopGas(), 'gas reversal')
	}

	// equip protective items -------------------------
	equip() {

		// equip armor, shield, and gasmask ----------
		let previousWeapon = this.state.playerStats.weapon
		
		if(this.state.actionObject === 'bodyArmor') {
			if(this.state.playerStats.bodyArmor === 'unequiped') {
				this.state.playerStats.bodyArmor = 'equiped'
				this.setState({playerStats: this.state.playerStats})
			}
		}
		if(this.state.actionObject === 'shield') {
			if(this.state.playerStats.shield === 'unequiped') {
				this.state.playerStats.shield = 'equiped'
				this.setState({playerStats: this.state.playerStats})
			}
		}
		if(this.state.actionObject === 'gasMask') {
			if(this.state.playerStats.gasMask === 'unequiped') {
				this.state.playerStats.gasMask = 'equiped'
				this.setState({playerStats: this.state.playerStats})
			}
		}

		// equip weapons ------------------------
		if(this.state.actionObject === 'rifle') {
			if(this.state.playerStats.weapon !== 'rifle') {
				this.state.playerStats.weapon = 'rifle'
				this.state.playerStats.weaponIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/rifle.png')
				this.setState({playerStats: this.state.playerStats})
			}
		}
		if(this.state.actionObject === 'pistol') {
			if(this.state.playerStats.weapon !== 'rifle' &&
				this.state.playerStats.weapon !== 'pistol') {
				this.state.playerStats.weapon = 'pistol'
				this.state.playerStats.weaponIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/pistol.png')
				this.setState({playerStats: this.state.playerStats})
			}
		}
		if(this.state.actionObject === 'ax') {
			if(this.state.playerStats.weapon !== 'rifle' &&
				this.state.playerStats.weapon !== 'pistol' &&
				this.state.playerStats.weapon !== 'ax') {
				this.state.playerStats.weapon = 'ax'
				this.state.playerStats.weaponIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/glyphicons-314-ax@3x.png')
				this.setState({playerStats: this.state.playerStats})
			}
		}
		if(this.state.actionObject === 'knife') {
			if(this.state.playerStats.weapon !== 'rifle' &&
				this.state.playerStats.weapon !== 'pistol' &&
				this.state.playerStats.weapon !== 'ax' &&
				this.state.playerStats.weapon !== 'knife') {
				this.state.playerStats.weapon = 'knife'
				this.state.playerStats.weaponIcon = require('../assets/icons/glyphicons_pro_1_9_2/glyphicons/png/knife.png')
				this.setState({playerStats: this.state.playerStats})
			}
		}
		if(previousWeapon === this.state.actionObject) {
			this.setState({level: this.state.level})
		}
		else {
			if(previousWeapon !== 'fists' && previousWeapon !== this.state.playerStats.weapon) {
				this.state.level[this.state.activeRow][this.state.activeCol].content = previousWeapon
				this.setState({level: this.state.level})
			}
			else if(this.state.actionObject === 'healingStation') {
				this.state.playerStats.health = 100
				this.setState({level: this.state.level, playerStats: this.state.playerStats})
			}
			else {
				this.state.level[this.state.activeRow][this.state.activeCol].content = 'r'
				this.setState({level: this.state.level})
			}
		}
	}

	// fight enemies ---------------------------------
	fight() { 
		// enemy types -------------------------
		var Enemy = function(health, weapon) {
			this.health = health;
			this.weapon = weapon;
		}
		var Weapon = function(name, damage) {
			this.name = name;
			this.damage = damage;
		}
		var Protection = function(name, type, protectionAmnt) {
			this.name = name;
			this.type = type;
			this.protectionAmnt = protectionAmnt;
		}

		// weapon types ---------------------
		var fists = new Weapon('fists', 5)
		var knife = new Weapon('knife', 10)
		var teeth = new Weapon('teeth', 12)
		var ax = new Weapon('ax', 15)
		var pistol = new Weapon('pistol', 20)
		var rifle = new Weapon('rifle', 25)
		var dualSwords = new Weapon('dualSwords', 50)

		// protection types ---------------------
		var shield = new Protection('shield', 'enemyProtection', 3)
		var bodyArmor = new Protection('bodyArmor', 'enemyProtection', 5)
		var gasMask = new Protection('gasMask', 'elementsProtection', '')

		// enemy types -----------------------
		var crazyInmate = new Enemy(60, knife)
		var guardDogs = new Enemy(70, teeth)
		var guard = new Enemy(80, pistol)
		var executioner = new Enemy(100, ax)
		var boss = new Enemy(150, dualSwords)

		var currentEnemy
		var enemyDamagePerHit
		var playerDamagePerHit

		// current enemy --------------------------
		if(this.state.actionObject === 'crazyInmate') {
			currentEnemy = crazyInmate
			// enemyDamagePerHit = crazyInmate.weapon.damage
		}
		else if(this.state.actionObject === 'guardDogs') {
			currentEnemy = guardDogs
			// enemyDamagePerHit = guardDogs.weapon.damage
		}
		else if(this.state.actionObject === 'guard') {
			currentEnemy = guard
			// enemyDamagePerHit = guard.weapon.damage
		}
		else if(this.state.actionObject === 'executioner') {
			currentEnemy = executioner
			// enemyDamagePerHit = executioner.weapon.damage
		}
		else if(this.state.actionObject === 'boss') {
			currentEnemy = boss
			// enemyDamagePerHit = boss.weapon.damage
		}


		enemyDamagePerHit = currentEnemy.weapon.damage
		// player damage per hit ---------------------
		if(this.state.playerStats.weapon === 'fists') {
			playerDamagePerHit = fists.damage
		}
		if(this.state.playerStats.weapon === 'rifle') {
			playerDamagePerHit = rifle.damage
		}
		if(this.state.playerStats.weapon === 'pistol') {
			playerDamagePerHit = pistol.damage
		}
		if(this.state.playerStats.weapon === 'ax') {
			playerDamagePerHit = ax.damage
		}
		if(this.state.playerStats.weapon === 'knife') {
			playerDamagePerHit = knife.damage
		}

		// protective wear adjustments ----------------
		if(this.state.playerStats.bodyArmor === 'equiped') {
			enemyDamagePerHit-=bodyArmor.protectionAmnt
		}
		if(this.state.playerStats.shield === 'equiped') {
			enemyDamagePerHit-= shield.protectionAmnt
		}

		let enmeyHitsToKill = this.state.playerStats.health/enemyDamagePerHit
		let playerHitsToKill = currentEnemy.health/playerDamagePerHit
		console.log('ehtk', enmeyHitsToKill)
		console.log('phtk', playerHitsToKill)

		if(playerHitsToKill>=enmeyHitsToKill) {
			this.state.playerStats.health = 0
			this.setState({playerStats: this.state.playerStats})
			alert('Sorry, you died!')
		}
		else {
			let damageRecieved = playerHitsToKill*enemyDamagePerHit
			if(currentEnemy === boss) {
				this.state.level[this.state.activeRow][this.state.activeCol].content = 'bossKey'
			}
			this.state.level[this.state.activeRow][this.state.activeCol].content = 'r'
			this.state.playerStats.health-=damageRecieved
			this.state.playerStats.enemiesKilled+=1
			this.setState({level: this.state.level, playerStats: this.state.playerStats})
		}
	}

	// main interaction ------------------------------
	interact(e) {
		e.preventDefault()

		console.log(this.state.actionObject)
		if(this.state.actionObject === 'guard' ||
			this.state.actionObject === 'guardDogs' ||
			this.state.actionObject === 'executioner' ||
			this.state.actionObject === 'crazyInmate' ||
			this.state.actionObject === 'boss') {
			this.fight();
		}
		else if(this.state.actionObject === 'bodyArmor' ||
			this.state.actionObject === 'shield' ||
			this.state.actionObject === 'gasMask' ||
			this.state.actionObject === 'rifle' ||
			this.state.actionObject === 'pistol' ||
			this.state.actionObject === 'ax' ||
			this.state.actionObject === 'knife' ||
			this.state.actionObject === 'healingStation') {
			this.equip()
		}
		else if(this.state.actionObject === 'firstAid' ||
			this.state.actionObject === 'syringe' ||
			this.state.actionObject === 'matches' ||
			this.state.actionObject === 'lighter' ||
			this.state.actionObject === 'flashLight' ||
			this.state.actionObject === 'key') {
			this.pickup()
		}
		else if(this.state.actionObject === 'lockedDoor') {
			alert('You need a key to open this door!')
		}
	}

	// data notifications --------------------------------
	healthNotification(e) {
		if(this.state.playerStats.health < 1) {
			alert('Sorry, you died!')
		}
	}

	render() {
		return(
			<div id='stateHolder'>
				<Row>
					<Col xs={3}>
						<Controls play={this.levelOne.bind(this)}
							health={this.state.playerStats.health}
							enemiesKilled={this.state.playerStats.enemiesKilled}
							items={this.state.playerStats.items}
							bodyArmor={this.state.playerStats.bodyArmor}
							shield={this.state.playerStats.shield}
							gasMask={this.state.playerStats.gasMask}
							weapon={this.state.playerStats.weapon}
							weaponIcon={this.state.playerStats.weaponIcon}
							healthNotification={this.healthNotification.bind(this)}
							use={this.use.bind(this)}
							/>
					</Col>
					<Col xs={9}>
						<Gameboard
							level={this.state.level}
							activeRow={this.state.activeRow}
							activeCol={this.state.activeCol}
							leftArrow={this.leftArrow.bind(this)}
							rightArrow={this.rightArrow.bind(this)}
							upArrow={this.upArrow.bind(this)}
							downArrow={this.downArrow.bind(this)}
							interact={this.interact.bind(this)}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}


export default GameStateController