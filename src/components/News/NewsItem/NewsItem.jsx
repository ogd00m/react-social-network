import React from 'react';

const NewsItem = (props) => {
    return (
        <div>
            {props.title}
            {props.body}
        </div>
    );
};

export default NewsItem;