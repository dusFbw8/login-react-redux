
import React            from 'react'
import { connect }      from 'react-redux'
import { Form, Button } from 'react-bootstrap'

const Login = ({loginStatus,pass,submit,change})=>{
  switch ( loginStatus ){
    case 'progress': return ( <h2>Logging in...</h2> );
    case 'success':  return ( <h2>Welcome!</h2> );
    case 'fail':     return ( <h2>Login Failed!</h2> );
    default:
      return (
      <Form onSubmit={submit}>
        <Form.Control name="pass" type="password" value={pass} onChange={change}/>
        <Button type="submit">Login</Button>
      </Form>
    )
  }
}

const dispatchers = (dispatch)=>{
  return {
    change: (e)=> {
      dispatch({
        type:'input',
        name:e.target.name,
        value:e.target.value
      })
    },
    submit: (e)=>{
      e.preventDefault();
      dispatch({type:'loginStatus',status:'progress'});
      if ( Math.random() > 0.5 ){
        setTimeout(t=>{
          dispatch({type:'loginStatus',status:'success'});
        },1000)
      } else {
        setTimeout( t => {
          dispatch({type:'loginStatus',status:'fail'});
        },1000)
        setTimeout( t => {
          dispatch({type:'loginStatus',status:false});
        },2000)
      }
    }
  };
}

export default connect( s=>{return s}, dispatchers )( Login )
