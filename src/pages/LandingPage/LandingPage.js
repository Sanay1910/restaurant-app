import React, { Component } from 'react';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from '../../containers/Register/Register';
import ReviewBox from '../../containers/ReviewBox/ReviewBox';

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage container">
                <Register></Register>
              <ReviewBox></ReviewBox>
            </div>
        );
    }
  }

  export default LandingPage;