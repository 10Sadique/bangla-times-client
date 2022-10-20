import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();

    const {
        category_id,
        title,
        image_url,
        author,
        details,
        total_view,
        rating,
    } = news;

    return (
        <div className="my-10">
            <div className="w-full border shadow-lg border-gray-50 card bg-base-100">
                <div className="p-5 card-body">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 overflow-hidden rounded-full">
                                <img src={author?.img} alt="" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-800">
                                    {author?.name}
                                </h1>
                                <p className="text-xs text-gray-600">
                                    {author?.published_date}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaRegBookmark className="w-5 h-5" />
                            <FaShareAlt className="w-5 h-5" />
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <figure className="w-full mb-5 overflow-hidden rounded-lg">
                        <img className="w-full" src={image_url} alt="Shoes" />
                    </figure>
                    <p>{details}</p>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FaStar className="text-yellow-400" />
                                <span>{rating.number}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEye />
                                <span>{total_view}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/category/${category_id}`}>
                            <button className="btn btn-primary">
                                All News in this Category
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
