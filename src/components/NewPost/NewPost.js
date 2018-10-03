import React, {Component} from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component{
    state ={
        title: '',
        content: '',
        author: 'Max'
    }

    postDataHandler = () => {
        const data ={
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
            });
    }
    render() {

        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <div className="AddTitle">
                    <h5>Title</h5>
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                </div>
                <div className="AddContent">
                    <h5>Content</h5>
                    <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                </div>
                <div className="SelectAuthor">
                    <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                        <option value="Max">Max</option>
                        <option value="Maryana">Maryana</option>
                        <option value="Ihor">Ihor</option>
                    </select>
                </div>
                <div className="AddPost">
                    <button onClick={this.postDataHandler} className="Add">Add post</button>
                </div>
            </div>
        );
    }
}
export default NewPost;