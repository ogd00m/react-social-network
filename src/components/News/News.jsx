import React from 'react';
import NewsItem from "./NewsItem/NewsItem";
import s from "./News.module.css"

const News = () => {
    return (
        <div>
            News

            <div className={s.news}>
                <NewsItem title='New president was born' body='a new president of the United
                States of America was born today. Greetings to his parents!!!'/>
                <NewsItem />

            </div>
        </div>
    );
};

export default News;