import React, { useState } from 'react';

const Myİnput = () => {

    const [search, setSearch] = useState();

    return (
        <input
        value={search} 
        onChange={e => setSearch(e.target.value)}
        className='search' 
        type="text" />
    );
};

export default Myİnput;