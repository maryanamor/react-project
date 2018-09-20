import React, {Component} from 'react';

import './Post.css';

class Post extends Component{
    render() {
        let post = <p> Please select a Post! </p>;

        post = (
            <div>
                   <h5>Title</h5>
                   <span>Author</span>
            </div>
        );
        return (
            <div className="Post">
                {post}
            </div>
        );
    }
}
export default Post;