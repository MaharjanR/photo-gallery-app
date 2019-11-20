import React from 'react';

const Photo = (props) => {

    console.log(props);
    return(
        <li key={`${props.id}`}>
            <img src={`${props.url}`} alt="" />
        </li>
    );
}

export default Photo;