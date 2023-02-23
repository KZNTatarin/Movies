import React, { useEffect, useState } from 'react';
import Movieİtem from '../components/Movieİtem/Movieİtem';
import MyButton from '../components/Uİ/Button/MyButton';
import Filter from '../components/Uİ/Filter/Filter';
import Loader from '../components/Uİ/Loader/Loader';
import Myİnput from '../components/Uİ/İnput/Myİnput';

const Movies = (props) => {
    console.log(props);
    const [moviesList, setMoviesList] = useState();

    useEffect(() => {
        setMoviesList(props?.data?.movies);
    }, [props?.data?.movies]);

    return moviesList ? (
        <div className='movies'>
            <div className="container">
                <div className="movies__content">
                    <Myİnput />
                    <Filter filter={props} />

                    <div className="movies__list">
                        {moviesList.map((movie) =>
                            <Movieİtem data={movie} />
                        )}
                    </div>

                </div>

            </div>
        </div>
    ) : <Loader/> 
};

export default Movies;