import React from 'react';
import '../PhotoCard.scss';

function PhotoCard({ photo }) {
    return (
        <div className="photo-card">

            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>

        </div>
    );
}export default PhotoCard;
