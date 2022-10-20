import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import NewsSummeryCard from './Shared/NewsSummeryCard';

const Home = () => {
    const { loading } = useContext(AuthContext);
    const allNews = useLoaderData();

    // console.log(news);

    if (loading) {
        return (
            <div className="my-10">
                <button className="btn btn-primary loading">loading</button>
            </div>
        );
    }

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
