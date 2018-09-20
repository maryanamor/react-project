import React, {Component} from 'react';

import './NewPost.css';

class NewPost extends Component{
    render() {
        let addPost = <p> Please select a Post! </p>;

        addPost = (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <div className="AddTitle">
                    <h5>Title</h5>
                    <input type="text"/>
                </div>
                <div className="AddContent">
                    <h5>Content</h5>
                    <input type="text"/>
                </div>
                <div className="SelectAuthor">
                    <h5>Content</h5>
                    <select>
                        <option checked>Max</option>
                        <option>Maryana</option>
                        <option>Ihor</option>
                    </select>
                </div>
                <div className="AddPost">
                    <button className="Add">Add post</button>
                </div>
            </div>
        );
        return (
            <div>
                {addPost}
            </div>
        );
    }
}
export default NewPost;