import React from 'react';
import {Route, Link} from "react-router-dom";
// import axios from 'axios';
// import PostList from "../components/PostList";

import Post from './Post';

const PostListPage = ({ match }) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post 1</Link></li>
                <li><Link to={`${match.url}/2`}>Post 2</Link></li>
                <li><Link to={`${match.url}/3`}>Post 3</Link></li>
                <li><Link to={`${match.url}/4`}>Post 4</Link></li>
            </ul>
            <Route path={`${match.url}/:id`} component={Post} />
        </div>
    );
};

// class PostListPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             postlist: []
//         };
//     }

//     _getList = async () => {
//         const {
//             data: {
//                 data: { posts }
//             }
//         } = await axios.get("../../public/post_list.json");
//         this.setState({ posts });
//     };


//     componentDidMount() {
//         this._getList();
//     }

//     render() {
//         return (
//             <div>
//                 <PostList list={this.state.postlist} />
//             </div>
//         )
//     }
// }

export default PostListPage;