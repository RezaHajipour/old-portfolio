import React from 'react';
import "./Card3.css";

const Card3 = () => {
    return (
        <div className="card">
            <img src={this.props.img} />
            <div className="card-body">
                <h2>{this.props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <h5>{this.props.author}</h5>
            </div>
        </div>
    );
}

export default Card3;
