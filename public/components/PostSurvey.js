import React from 'react';
import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';
import StarRating from 'react-star-rating';


class PostSurvey extends React.Component {
  render() {
  	// var faStar = <div> <FaStar> </div>
    return (
      <div>
      	<div>
      		SURVEY
      	</div>
        1. How likely would you want to have dinner with this person? <br />
        <form action="/api" method="POST">
        	<StarRating name="airbnb-rating" totalStars={5} />
        	<button type="submit" className="btn btn-submit">Submit Rating</button>
      	</form>
        2. How engaging was your conversation with your partner? <br />
        <form action="/api" method="POST">
        	<StarRating name="airbnb-rating" totalStars={5} />
        	<button type="submit" className="btn btn-submit">Submit Rating</button>
      	</form>
        3. How similar do you think you're with your partner? <br />
         <form action="/api" method="POST">
        	<StarRating name="airbnb-rating" totalStars={5} />
        	<button type="submit" className="btn btn-submit">Submit Rating</button>
      	</form>
        4. How much did you enjoy getting to know your partner? <br />
        <form action="/api" method="POST">
        	<StarRating name="airbnb-rating" totalStars={5} />
        	<button type="submit" className="btn btn-submit">Submit Rating</button>
      	</form>
      </div>
    );
  }
}

export default PostSurvey;