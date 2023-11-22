import React from 'react';

function List({item}) {
    return (
        <ul>
            {item.map((el)=><li>{el}</li>)}
        </ul>
    );
}

export default List;