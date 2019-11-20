import React, { Component } from 'react';
import Photo from './Photo';
import SearchNotFound from './SearchNotFound';

class PhotoContainer extends Component {

    renderPhoto = () => {
        const length = this.props.photo.length;
        let photoArr = [];

        if( length > 0 ){
            const url = this.props.photo.map( url => `https://farm${url.farm}.staticflickr.com/${url.server}/${url.id}_${url.secret}.jpg`);
            const id =  this.props.photo.map( url => `${url.id}`);
            const tempPhoto = [];

            photoArr.push(<h2>Results</h2>);

            for( let i = 0; i < length; i++){
                tempPhoto.push(
                    <Photo 
                    url={url[i]} 
                    key={id[i]} />
                );
            }
            photoArr.push(<ul>{ tempPhoto }</ul>);
            // photoArr.map( value => {
            //     <Photo url={value} key={} />
            // })
        }

        else{
            photoArr.push(<SearchNotFound />);
        }

        return photoArr;
    }

    render(){        
        return(
            <div className="photo-container">
                { this.renderPhoto() }
            </div>
        );
    }
}

export default PhotoContainer;