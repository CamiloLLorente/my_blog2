import React from 'react';

interface CardFavoriteProps {
    title: string;
    description: string;
}

const CardFavorite: React.FC<CardFavoriteProps> = ({ title, description }) => {
    return (
        <div className="card-favorite">
            <div className="card-favorite__content">
                <h3 className="card-favorite__title">{title}</h3>
                <p className="card-favorite__description">{description}</p> 
            </div>
        </div>
    );
};

export default CardFavorite;