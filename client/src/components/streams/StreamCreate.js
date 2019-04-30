import React,{Component} from 'react';
import { connect } from 'react-redux';
import StreamForm from './streamForm';
import  {createStream} from '../../actions'
class StreamCreate extends Component{

onSubmit=(formObject)=>{
console.log(this.props,'formobject')
this.props.createStream(formObject)
}
render(){
    return (
   <div>
       <h3>Create a Stream </h3>
           <StreamForm onSubmit={this.onSubmit}></StreamForm>
   </div>
   
    )
}    
}

export default connect(null,{createStream})(StreamCreate)