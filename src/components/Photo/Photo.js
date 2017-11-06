import React from 'react';

const Photo = ({ photo }) => {
    let url = `${photo.urls['600']}`;
    return (
        <div>
            <img src={url} alt="" />
        </div>
    )
}

export default Photo;
