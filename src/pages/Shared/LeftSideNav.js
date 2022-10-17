import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h4 className="font-bold w-full text-center text-xl pt-5">
                All Categories
            </h4>
            <ul className="menu bg-base-100 w-full p-2 rounded-box text-blue-700">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSideNav;
