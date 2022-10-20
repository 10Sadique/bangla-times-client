import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Shared/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();

    // console.log(news);

    return (
        <div>
            {/* <h1 className="text-3xl font-bold">Home: {allNews.length}</h1> */}
            <div className="my-10">
                {allNews.map((news) => (
                    <NewsSummeryCard key={news._id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default Home;
