import React from 'react';
import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';

class PostSurvey extends React.Component {
  render() {

    return (
      <div>
        1. How likely would you want to have dinner with this person? <br />
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <br />
        2. How engaging was your conversation with your partner? <br />
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <br />
        3. How similar do you think you're with your partner? <br />
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <br />
        4. How much did you enjoy getting to know your partner? <br />
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <br />
      </div>
    );
  }
}

export default PostSurvey;