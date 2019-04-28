import React,{Component}  from 'react';
import {connect} from 'react-redux'; 
import {signIn,signOut} from '../actions'
class GoogleAuth extends Component{
   
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'882571329006-l926avchtj8khbt2elateamg3f9el9f0.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(()=>{
                    console.log('casdcs',this.auth.isSignedIn.get())
                    this.onAuthChange(this.auth.isSignedIn.get())
                })
            });
        });

    }
    onAuthChange(isSignedIn){
    console.log(isSignedIn)
      if(isSignedIn){
          this.props.signIn(this.auth.currentUser.get().getId());
      }else{
          this.props.signOut();
      }
    }
  
    signMeIn=()=>{
        this.auth.signIn().then(this.props.signIn())
    }
    signMeOut=()=>{
        this.auth.signOut().then(this.onAuthChange(this.auth.isSignedIn.get()))
    }
    renderAuthButton(){
        console.log(this.props,'propsssssssssssss')
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return <button onClick={this.signMeOut}  className="ui red google button">
            <i className="google icon"/>
            Sign out
            </button>
        }else{
            return <button onClick={this.signMeIn} className="ui red google button">
            <i className="google icon"/>
            Sign in with google
            </button>
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}
const mapStateToProps = (state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth); 