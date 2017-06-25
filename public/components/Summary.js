import React from 'react';
import { render } from 'react-dom'


class Summary extends React.Component {
	constructor(){
		super();
	}

	render(){
		console.log('summary', this.props.summary)
		return(
			<div>
				write something
			</div>
		)
	}
}

export default Summary;