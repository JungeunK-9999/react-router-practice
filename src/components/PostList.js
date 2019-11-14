import React from 'react';
import { Link } from 'react-router-dom';

const PostList = (props) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {props.list.map((post, index)=>(
                    <li key={index}>
                    <Link to="/">
                        <img src={post.thumbnail}
                        alt={post.title}/>
                        <div>
                            <div>{post.title}</div>
                            <div>{post.content}</div>
                        </div>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;