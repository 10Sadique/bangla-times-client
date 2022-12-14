import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://bangla-times-server.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h4 className="w-full py-5 text-xl font-bold text-center">
                All Categories
            </h4>
            <ul className="w-full h-full p-2 text-blue-700 menu bg-base-100 rounded-box">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSideNav;
