import React from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

class ReviewBox extends React.Component {

    state = {
        allReviews: []
    };

    componentDidMount() {
        fetch('https://task26.herokuapp.com/review').then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    allReviews: data
                })
            }).catch(err => {
        });
    }


    render() {

        const cards = this.state.allReviews.map(review => (
            <ReviewCard
                key={review.id}
                rating={review.rating}
                reviewText={review.reviewtext}
                updated_at={review.updated_at}
            />
        ));


        return (
            <React.Fragment>
                <br/>
                <h4>Reviews</h4>
                <hr/>
                <div className="row">
                    {cards}
                </div>
            </React.Fragment>
        )
    }
}

export default ReviewBox;
