import React from 'react';

const Photo = (props) => {

    return(
        <li key={`${props.id}`}>
            <img src={`${props.url}`} alt="" />
        </li>
    );
}   

export default Photo;