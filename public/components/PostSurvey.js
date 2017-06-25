import React from 'react';
// import FaStar from 'react-icons/lib/fa/star';
// import FaStarO from 'react-icons/lib/fa/star-o';
// import StarRating from 'react-star-rating';
import ReactStars from 'react-stars'
import { render } from 'react-dom'




class PostSurvey extends React.Component {
	constructor() {
		super();
		this.state = {
			Q1: '',
			Q2: '',
			Q3: '',
			Q4: ''
		}
		this.ratingChanged = this.ratingChanged.bind(this);
 	 	this.handleSubmit = this.handleSubmit.bind(this)
	}
	ratingChanged(name, event){
		this.preventDefault();
		console.log('name', name)
		console.log(event)

		this.setState({
			[name]: event
		})

	}

	handleSubmit(event) {
  	console.log('entered')
   	event.preventDefault();
   	this.props.postInfo(this.state)


  };

  render() {
  	// var faStar = <div> <FaStar> </div>
    return (
      <div>
      	<div>
      		SURVEY
      	</div>
      	<form onSubmit={this.handleSubmit}>
        1. How likely would you want to have dinner with this person? <br />
        <ReactStars count={5} onChange={(e) => this.ratingChanged('Q1', e)} size={24} color2={'#ffd700'} />
        2. How engaging was your conversation with your partner? <br />
        <ReactStars count={5} onChange={(e) => this.ratingChanged('Q2', e)} size={24} color2={'#ffd700'} />
        3. How similar do you think you're with your partner? <br />
        <ReactStars count={5} onChange={(e) => this.ratingChanged('Q3', e)} size={24} color2={'#ffd700'} />
        4. How much did you enjoy getting to know your partner? <br />
        <ReactStars count={5} onChange={(e) => this.ratingChanged('Q4', e)} size={24} color2={'#ffd700'} />

         <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default PostSurvey;