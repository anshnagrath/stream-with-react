import React,{Component} from 'react';
import Modal from '../modal'
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions';
import {connect} from 'react-redux';
import{Link}from'react-router-dom';
class StreamDelete extends Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
      
    }
    render(){
      return (

      <Modal header={'Delete Stream'} onDismiss={this.onDismiss} content={this.renderContent()} action={this.renderAction()}></Modal>
     
          
      )      
    }
    renderAction() {
        return (
        <div>
            <React.Fragment>
            <button  onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button" >Cancel</Link>
            </React.Fragment>

        </div>
    ); 
    }
     onDismiss=()=>{
        history.push('/')
    }
  renderContent(){
      if(!this.props.stream){
          return 'Are you sure you want to delete this stream?'
      }else{
          return `Are you sure you want to delete this stream with title : ${this.props.stream.title}`
      }
  }

        
        
}
const mapStateToProps=(state,ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)