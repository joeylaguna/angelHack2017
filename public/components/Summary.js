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
				<div> Name: {this.props.summary.userInfo.name} </div>
				<div> Age: {this.props.summary.userInfo.age} </div>
				<div> Ethnicity: {this.props.summary.userInfo.ethnicity} </div>
				<div> Gender: {this.props.summary.userInfo.gender} </div>
				<div> Religious Background: {this.props.summary.userInfo.religiousBackground} </div>
				<div> Sexual Orientation: {this.props.summary.userInfo.sexualOrientation} </div>
				<div> Political Preference(Self Identified): {this.props.summary.userInfo.politicalPreference} </div>
				<div> Conservative: {this.props.summary.polit.Conservative} </div>
				<div> Green: {this.props.summary.polit.Green} </div>
				<div> Liberal: {this.props.summary.polit.Liberal} </div>
				<div> Libertarian: {this.props.summary.polit.Libertarian} </div>
				<div> Answers to Question: </div>
				<div> Q1: 3 </div>
				<div> Q2: 4 </div>
				<div> Q3: 2 </div>
				<div> Q4: 4 </div>
				<div> After looking over the survey, do you have any final thoughts? </div>
				<div> We focus so much on our differences, and that is creating, I think, a lot of chaos and negativity and bullying in the world. And I think if everybody focused on what we all have in common - which is - we all want to be happy. Ellen DeGeneres
				</div>
			</div>
		)
	}
}

export default Summary;