import React, { Component } from 'react';
import { Entity, Cylinder } from 'aframe-react';
import { connect } from 'react-redux';
import { setLocation } from '../../redux/actions/actions'
import thumbCity from '../Assets/thumb-city.png';
import ocarina from '../Assets/ocarina.mp3'

class Button extends Component {
	render() {
		let toggle = true;

		this.handleClick = (e) => {
			let {dispatch} = this.props;
			if (toggle){
				dispatch(setLocation('newyork'));
				toggle = false;
			} else {
				dispatch(setLocation('hongkong'));
				toggle = true;
			}
		}

		return(
			<Entity position={{x: 3, y: 1.5, z: -3}} >
				<audio id="click-sound" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
				<img id="city-thumb" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"/>
				<img id="logo" alt="" crossOrigin="anonymous" src={thumbCity}/>
				<audio id="music" alt="" crossOrigin="anonymous" src={ocarina}></audio>
				<Entity geometry={{primitive: 'plane', width: 2, height: 1}}
					rotation={{x:0, y:-45, z:0}}
					material={{color: '#200f08', src: `#logo`, side:`double` }}
					text={{value: `Go to New York.`, align: `center` }}
					events={{click: this.handleClick}}
					sound={{ on: 'click', src: '#click-sound'}}
					sound={{ src: '#music', autoplay: true, loop: true, volume: 0.5 }}
					/>
				<Entity geometry={{primitive: 'cylinder', radius: 0.1, height: 1}}
					material={{color: '#200f08' }}
					position={{x: 0, y: -1, z: 0}}
					/>
			</Entity>
		)
	}
}
export default connect()(Button);

/*

event-set__1={{_event: 'mousedown', property: 'scale', to:'1 1 1' }}
event-set__2={{_event: 'mouseup', property: 'scale', to:'1.2 1.2 1' }}
event-set__3={{_event: 'mouseenter', property: 'scale', to:'1.2 1.2 1' }}
event-set__4={{_event: 'mouseleave', property: 'scale', to:'1 1 1' }}


<Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>

<Entity class="link"
	geometry={{ primitive: 'plane', height: 1, width 1}}
	material={{ shader: flat, src: ${thumb}}}
	event-set__1={{_event: mousedown; scale: 1 1 1}}
	event-set__2="_event: mouseup; scale: 1.2 1.2 1"
	event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
	event-set__4="_event: mouseleave; scale: 1 1 1"
	set-image="on: click; target: #image-360; src: ${src}"
	sound="on: click; src: #click-sound"/>

	<Entity
		geometry={{primitive: 'box', width: 1, height: 4, depth: 0.2 }}
		position={{x: 0, y: 0, z: -5}}
		material= {{color: '#01a124'}}
		events={{click: this.handleClick}}
		sound={{ on: 'click', src: '#click-sound'}}
		/>


<script src="raw.githubusercontent.com/gasolin/aframe-href-component‌​/…; <script type="text/javascript" src="webvr.js"></script> <script src="rawgit.com/ngokevin/aframe-text-component/master/dist/…‌​; </head> <body> <a-scene> <a-box width="1" height="0.4" position="0 0 0" depth="0.0" color="red"> <a-entity text="text: What's up" scale="0.2 0.2 0.2" color="blue" position="-0.3 0.01 0"> </a-entity> </a-box> </a-scene>

 */
