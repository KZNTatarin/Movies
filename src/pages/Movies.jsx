import React, { useEffect, useState } from 'react';

import { MoviesService } from '../services/MoviesService';

import Movieİtem from '../components/Movieİtem/Movieİtem';
import Filter from '../components/Uİ/Filter/Filter';
import Loader from '../components/Uİ/Loader/Loader';
import Myİnput from '../components/Uİ/İnput/Myİnput';

const Movies = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [filter, setFilter] = useState('');

    // поскролльная пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    // получаем массив фильмов с учетом фильтра и страницы
    const fetchMovies = async (page) => {
        const data = await MoviesService.getMovies(page);
        const movies = await data.json();
        setMoviesList([...moviesList, ...movies.data.movies]);
        setFetching(false);
    };

    // обработчик на скроллинг (подгрузка при скролле)
    useEffect(() => {
        const scrollHandler = (e) => {
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
                setFetching(true);
            };
        };

        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, []);

    // при fetching меняем страницу на +1, и делаем подгрузку новых данных
    useEffect(() => {
        if (fetching) {
            fetchMovies(currentPage + 1);
            setCurrentPage(currentPage + 1);
        }
    }, [fetching]);

    // при изменении значения фильтра (даже при первой загрузке) вызываем фильтрацию текущего moviesList
    
    // #TODO -- фильтрацию
    useEffect(() => {
        console.log(filter);
    }, [filter]);

    return (
        <div className='movies'>
            <div className="container">
                <div className="movies__content">
                    <Myİnput />

                    <Filter setFilter={setFilter} />

                    <div className="movies__list">
                        {moviesList.map((movie) =>
                            <Movieİtem data={movie} />
                        )}
                    </div>
                    {fetching && <Loader />}
                </div>
            </div>
        </div>
    )
};

export default Movies;