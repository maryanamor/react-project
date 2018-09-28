import React from 'react';

import './Post.css';

const post = (props) => (

    <article className="Post" onClick={props.clicked}>
        <h5>{props.title}</h5>
        <div className="Info">
            <span>{props.author}</span>
        </div>
    </article>
)

export default post;