import React from 'react';
import Photo from './Photo';
import SearchNotFound from './SearchNotFound';

const PhotoContainer = props => {

    // const length = props.photo.length;
    const length = 0;
    let result;

    if( length > 0 ){
        const results = props.photo;
        console.log(results);
        if(results){
            result = results.map( photo => {
                return <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
            });
        }
        
    }

    else{
        result = <SearchNotFound />;
    }
    

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {result}
            </ul>
        </div>
    );
}

export default PhotoContainer;