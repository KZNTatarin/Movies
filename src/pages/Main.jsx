import React, { useEffect, useState } from "react";

const About = (props) => {
    const [film, setFilm] = useState();

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 50);
        setFilm(props?.data?.movies[randomId]);
    }, [props?.data?.movies]);

    return film ? (
        <div style={{ backgroundImage: `url(${film.background_image})` }} className="main-bg">
            <div className="main">
                <div className="container">
                    <div className="film__content">

                        <div className="film__text">
                            <h1 className="film__title">{film.title}</h1>
                            <p className="film__subtitle">{film.synopsis.slice(0, 300)}...</p>
                        </div>

                        <div className="film__img">
                            <img src={film.medium_cover_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <p>loading...</p>
    );
};

export default About;
