import React from 'react'
import axios from 'axios'

const baseUrl = "http://jsonplaceholder.typicode.com";

class PostForm extends React.Component{
    state = {
        title: '',
        body: '',
        userId: '9999',
        isSubmitted: false,
        error: false
    }

    changeHandler = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    };
    submitHandler = event => {
        event.preventDefault();

        axios.post(`${baseUrl}/posts`,{
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        }).
        then(rese=>{
            this.setState({
                isSubmitted: true,
                error: false,
                title: '',
                body: ''
            });
            console.log(rese);
        }).
        catch(err=>{
            this.setState({
                isSubmitted: false,
                error: true
            });
            console.log(err);
        })
    };

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input
                    placeholder="Enter title"
                    onChange={this.changeHandler}
                    value={this.state.title}
                    type='text'
                    name='title'
                    className='form-control'
                />
                <textarea
                    placeholder="Enter text"
                    onChange={this.changeHandler}
                    value={this.state.body}
                    name='body'
                    className='form-control'
                />
                <button type='submit' className='btn btn-primary' >Submit</button>
                {this.state.isSubmitted ? <p className='text-success'>Form submitted success</p> : ""}
                {this.state.error ? <p className='text-danger'>Something went wrong! try again!</p> : ""}
            </form>
        )
    }
}

export default PostForm;