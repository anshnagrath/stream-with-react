import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form'
class StreamForm extends Component{
renderInput=(formProps)=>{
const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`
return (<div className={className}>
        <label autoCorrect="off" >{formProps.label}</label>
        <input {...formProps.input}/>
        <div>{this.renderError(formProps.meta)}</div>
</div>
)
}
renderError({error,touched}){
    if(error && touched){
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )
    }

}
onSubmit=(formObject)=>{
console.log(this.props,'formobject')
this.props.onSubmit(formObject)
}
render(){
    return (
       
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter the title" ></Field>
        <Field name="description" component={this.renderInput} label="Enter the discription"></Field>
        <button className="ui button primary">Submit</button>
    </form>
   
    )
}    
}
const  validate = formValues =>{
const errors= {}
if(!formValues.title){
errors.title = "You must enter a title"
}
if(!formValues.description){
    errors.description = "You must enter a description "
    }
    return errors
}

const formWrapped = reduxForm({
    form:'streamForm',
    validate
})(StreamForm);
export default formWrapped