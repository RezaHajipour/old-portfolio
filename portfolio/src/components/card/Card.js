import React from 'react';
import "./Card.css";

const Card = () => {
    return (
        <div class="parent">
            <div class="container">
                <div class="box">
                    <div class="imgBx">
                        <img src="virus (1).svg" />
                    </div>
                    <div class="contentBx">
                        <h2>title in h2</h2>
                        <p>
                            Note that the development build is not optimized. To create a
                            production build, use npm run build.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
