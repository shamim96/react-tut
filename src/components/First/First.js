import React, {Component} from 'react';
class First extends Component{
    render(){
        return (
            <div>
               <h1>Name: {this.props.name}</h1>
                <h4>Age: {this.props.age}</h4>
            </div>
        )
    }
}
export default First;