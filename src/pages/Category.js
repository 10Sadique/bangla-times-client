import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Shared/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div className="my-10">
            {/* <h2 className="text-3xl font-bold">{categoryNews.length}</h2> */}
            <div>
                {categoryNews.map((news) => (
                    <NewsSummeryCard key={news._id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default Category;
