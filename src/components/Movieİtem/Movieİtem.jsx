import React from 'react';

import {Link} from "react-router-dom";

import MyButton from '../Uİ/Button/MyButton';

const Movieİtem = (movie) => {
    return (
        <div style={{ backgroundImage: `url(${movie.data.background_image})` }} className="movie">
            <div className="movie__img"><img src={movie.data.medium_cover_image} alt="" /></div>
            <div className="movie__text">
                <div className="movie__title">{movie.data.title_long}</div>
                <div className="movie__subtitle">{movie.data.synopsis.slice(0, 300)}...</div>
                {movie?.data?.genres && (
                    <div className="movie__genres">
                        <span className='red-text'>Genres</span> : {movie?.data?.genres.map((genre) => (<div>
                            • {genre}
                        </div>))}
                    </div>
                )}
                <div className='movie__rating'> <span className='red-text'>Rating</span> on IMDb: {movie.data.rating}</div>
                <Link to={`/movies/${movie.data.id}`}>
                <MyButton>More</MyButton>
                </Link>
            </div>
        </div>
    );
};

export default Movieİtem;
