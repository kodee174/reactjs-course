import React, { Component } from "react";
import './Card.css'

function Card2(props) {
    const { imageUrl, children } = props;
    return (
        <div className="card">
            <div className="card-cover"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card2;

// props duoc truyen truc tiep
// khong co state
// khong co lifeclycles