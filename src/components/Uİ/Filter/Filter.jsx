import React, { useState } from 'react';
import MyButton from '../Button/MyButton';

const Filter = (filter) => {


    const handlFilter = (type) => {
        switch (type) {
            case 'rating':
                filter.filter.setFilter('rating');
                break;

            case 'title':
                filter.filter.setFilter('title');
                break;

            case 'year':
                filter.filter.setFilter('year');
                break;

            default:
                filter = '';
        }
    }

    return (
        <div className="filter">
            <MyButton onClick={() => handlFilter('rating')} >Rating</MyButton>
            <MyButton onClick={() => handlFilter('title')} >Title</MyButton>
            <MyButton onClick={() => handlFilter('year')} >Year</MyButton>
        </div>
    );
};

export default Filter;