import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
    const { _id, title, image_url, author, details, total_view, rating } = news;

    return (
        <div>
            <div className="w-full mb-5 border border-gray-100 shadow-lg card card-compact bg-base-100">
                <div className="card-body">
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
                    <figure className="mb-2 ">
                        <img className="w-full" src={image_url} alt="" />
                    </figure>
                    <div>
                        {details.length > 250 ? (
                            <p>
                                {details.slice(0, 250) + '...'}{' '}
                                <Link
                                    className="text-indigo-600 underline"
                                    to={`/news/${_id}`}
                                >
                                    Read More
                                </Link>
                            </p>
                        ) : (
                            <p>{details}</p>
                        )}
                    </div>
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
            </div>
        </div>
    );
};

export default NewsSummeryCard;
