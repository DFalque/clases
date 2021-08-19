import React, { useState, useEffect } from "react";
import Player from "../Player/Player";
import './life-bar.css';

// TODO PREGUNTAR POR COMPARTIR LOS PROPS
interface LifeBarProps {
	player: Player
}

// function fetchFrom() {
// 	return new Promise<number[]>( (resolve, reject )=>{
// 		//ir a buscar datos al server
// 		resolve([4545])
// 	}
// }




// TODO:
/*
*
*
*
*/
export default function LifeBar (props: LifeBarProps) {
	const { player } = props;
	const [life, setLife] = useState(player.life)
	const [initialLife, _] = useState(player.life)




	const barLife = `${ (life / initialLife)*100 }%`

	const barStyle ={
		width:barLife
	}

useEffect(() => {
	
	// return player.subscribe(event=>setLife(event.life))
}, [])

		return (
			<div className="life-bar">
				  <span style={barStyle}>{barLife}</span>
			</div>
		);

}



/*
import React, { Component } from "react";
import Player from "../Player/Player";
import './life-bar.css';

interface LifeBarProps {
	player: Player
}

// TODO:


*
*
*

export class LifeBar extends Component<LifeBarProps> {
	private unsubscribe: () => void;

/*	componentDidMount() {
		const { player } = this.props;

		this.unsubscribe = player.subscribe(() => this.setState({}));
	}    

	componentWillUnmount() {
		this.unsubscribe();
	}


	render() {
		const { player } = this.props;

		return (
			<div className="life-bar">
				  <span style={{width: '55%'}}></span>
			</div>
		);
	}
}


*/