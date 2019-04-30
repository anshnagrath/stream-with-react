import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions';
import StreamForm from './streamForm.js'
class StreamEdit extends Component {
componentDidMount(){
     this.props.fetchStream(this.props.match.params.id)
}
onSubmit=(formValues)=>{
    console.log(formValues,'valuessssss')
    this.props.editStream(this.props.match.params.id,formValues);
}
render(){
console.log(this.props,'propppp')
if(this.props.stream){
    return (
            <div>
            <h3>Edit a Stream</h3>
            <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit}></StreamForm>
            </div>)
}else{
    return (
        <div>
            Loading ..
        </div>)
}
}
}
const mapStateToProps = (state,ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit)