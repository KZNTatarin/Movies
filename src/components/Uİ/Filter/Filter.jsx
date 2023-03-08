import React from 'react';
import MyButton from '../Button/MyButton';

const Filter = (props) => {
    const handleFilter = (type) => {
        props.setFilter(type);
    };

    return (
        <div className="filter">
            <MyButton onClick={() => handleFilter('rating')}>Rating</MyButton>
            <MyButton onClick={() => handleFilter('title')}>Title</MyButton>
            <MyButton onClick={() => handleFilter('year')}>Year</MyButton>
            <MyButton onClick={() => handleFilter('')}>Default</MyButton>
        </div>
    );
};

export default Filter;