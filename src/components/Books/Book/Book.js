import React from 'react'

class Book extends React.Component{
    constructor(){
        super();
        console.log("Book constructor");
    }

    componentDidMount(){
        console.log("Book componentDidMount")
    }
    componentDidUpdate(){
        console.log("Book componentDidUpdate")
    }
    componentWillUnmount()
    {
        console.log("Book componentWillUnmount");
    }

    state = {
        isEditable : false
    };
    saveDate = (event) =>{
       if(event.key === 'Enter'){
           this.setState({
               isEditable : false
           })
       }
    };
    render(){
        let output = this.state.isEditable ? <input
            onChange={(e)=>this.props.changeHandler(e.target.value,this.props.book.id)}
            onKeyPress={this.saveDate}
            value={this.props.book.name} type='text' placeholder='Input book name' />  :  <p>{this.props.book.name}</p> ;
        return(
           <li className="list-group-item d-flex">
               {output}
               <span className="ml-auto">{this.props.book.price}</span>
               <div className="ml-5">
                   <span onClick={()=>this.setState({isEditable:true})} style={{cursor:"pointer"}} className="mr-2"> <i className="fa fa-edit"></i> </span>
                   <span onClick={()=>this.props.bookDelete(this.props.book.id)} style={{cursor:"pointer"}}><i className="fa fa-trash"></i></span>
               </div>
           </li>

        )
    }
}

export default Book;