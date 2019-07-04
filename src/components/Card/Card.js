import React, { Component } from 'react';
import './card.css'


class Card extends Component {

    render() {
        let styles = {
            display: 'inline-block',
            padding: '10px 50px',
            width: '500px',
            height: 'auto'
        }
        return (
            <div className="text-center" >
                {
                    this.props.logos.map(image => (
                        <img
                            className="image col-xs-6 col-sm-4 col-lg-3 text-center"
                            src={image.url}
                            alt={image.name}
                            onClick={(event) => { this.props.handleScore(); this.props.updateCount(image); }}
                            key={image.id}
                            style={styles}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Card;