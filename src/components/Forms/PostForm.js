import React from 'react'

const iniState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country: '',
    gender: '',
    skills: []
};

class PostForm extends React.Component{
    constructor(){
        super()
        this.myForm = React.createRef()

    }

    state = {
        ...iniState
    };

    changeHandler = event =>{
        if(event.target.type === "checkbox"){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            }else{
               this.setState({
                   ...this.state,
                   skills : this.state.skills.filter(skill=>skill != event.target.value)
               })
            }
        }else{
            this.setState({
                [event.target.name]:event.target.value
            })
        }
    };
    submitHandler = event =>{
      event.preventDefault();
      console.log(this.state);
      this.myForm.current.reset();
      this.setState({
          ...iniState
      });
    };

    render(){
        return(
            <form ref={this.myForm} onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={this.changeHandler}
                        value={this.state.name}
                        placeholder="Enter your name"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={this.changeHandler}
                        value={this.state.email}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={this.changeHandler}
                        value={this.state.password}
                        placeholder="Input your password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Short Bio</label>
                    <textarea
                        type="bio"
                        className="form-control"
                        id="bio"
                        name="bio"
                        onChange={this.changeHandler}
                        value={this.state.bio}
                        placeholder="Input your short bio"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select name="country" onChange={this.changeHandler} className="form-control" id="country">
                        <option>-choose your country- </option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Australia">Australia</option>
                        <option value="Nepal">Nepal</option>
                        <option value="USA">USA</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                <div className="form-check">
                    <input onChange={this.changeHandler} className="form-check-input" type="radio" name="gender" id="gender1"
                           value="Male" />
                    <label className="form-check-label" htmlFor="gender">Male</label>
                </div>
                    <div className="form-check">
                    <input onChange={this.changeHandler} className="form-check-input" type="radio" name="gender" id="gender2" value="Female" />
                    <label className="form-check-label" htmlFor="gender">Female</label>
                </div>
                    <div className="form-check">
                        <input onChange={this.changeHandler} className="form-check-input" type="radio" name="gender" id="gender3" value="Other" />
                        <label className="form-check-label" htmlFor="gender">Other</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Skills</label>
                    <div className="form-check">
                        <input name="skills" onChange={this.changeHandler} className="form-check-input" type="checkbox" value="Javascript" id="javascript" />
                            <label className="form-check-label" htmlFor="javascript">
                                Javascript
                            </label>
                    </div>
                    <div className="form-check">
                        <input onChange={this.changeHandler} className="form-check-input" type="checkbox" value="React Js" id="react" name="skills" />
                        <label className="form-check-label" htmlFor="javascript">
                            React Js
                        </label>
                    </div>
                    <div className="form-check">
                        <input onChange={this.changeHandler} className="form-check-input" type="checkbox" value="Php" id="php" name="skills" />
                        <label className="form-check-label" htmlFor="php">
                            Php
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default PostForm;