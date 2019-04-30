import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';
class StreamList extends Component{
    componentDidMount(){
        this.props.fetchStreams()

       console.log(this.props,'streams')
    }
    isAdmin(stream){
      //  console.log(this.props.isSignedIn,'is', this.props.currentUserId)
        if(this.props.currentUserId != undefined && stream.userId === this.props.currentUserId ){
            return  (
                <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                 Edit
                </Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button red">
                 Delete
                </Link>
                </div>
            )
        }
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                 <Link to="/streams/new/" className="ui button primary floated right">
                 Create Stream
                 </Link>   
                </div>
            )
        }
    }
    renderList(){
        console.log(this.props.streams,'changeInProps')
        
     return this.props.streams.map( stream=>{ 
        
          console.log('inn')
          return(
          
            <div className="item" key={stream.id}>
             {this.isAdmin(stream)}
            <i className="large middle aligned icon camera"/>
            <div className="content">
            {stream.title}
            <div className="description">
            {stream.description}
             </div>   
            </div>
           
            </div>
        
            )}
        )
    }
    render(){
        return (
        <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
        </div>
        )}
}
const mapDispatchToProps = (state) => {
    console.log(state,'streamz')
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn : state.auth.isSignedIn
        }
  }
export default connect(mapDispatchToProps,{fetchStreams})(StreamList);