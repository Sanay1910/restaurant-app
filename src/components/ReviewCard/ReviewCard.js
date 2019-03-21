import React from 'react';
import './ReviewCard.css';


const reviewCard = (props) => {


    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                    <p>Rating: {props.rating}</p>
                    <p>Review: {props.reviewText}</p>
                    <p>Last updated: {props.updated_at}</p>
                </div>
            </div>
        </div>

    )

};

export default reviewCard;