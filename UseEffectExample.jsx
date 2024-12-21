import React, {useEffect, useState} from 'react'

import Navbar from './components/Navbar.jsx'
import { useNavigate } from "react-router-dom"

function UseEffectExample() {
 
        const navigate = useNavigate();
        const url = "https://jsonplaceholder.typicode.com/posts";

        const [posts, setPosts] = useState([]);

        useEffect(() => {
            const fetchPosts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error occurred during fetching:", error);
            }
            };

            fetchPosts();
        }, [url]);

        return (
            <>
            <div>
                <Navbar />

                <div>
                <label>Name:</label>
                <input type="text" placeholder="name" />
                <label>Email:</label>
                <input type="text" placeholder="email" />
                </div>

                <div>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(-1)}
                >
                    Navigate Backwards
                </button>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigate(1)}
                >
                    Navigate Forwards
                </button>
                <button
                    className="btn btn-success btn-sm"
                    onClick={() => navigate("/contact-us")}
                >
                    Redirect to Contact
                </button>
                </div>

                <table border="1">
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Post Title</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.slice(0, 10).map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </>
        );
    }

export default UseEffectExample;