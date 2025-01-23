import React, {useState} from 'react';
import '../css/LoginForm.css';
import {Link} from 'react-router-dom'
import '../css/AvailableQuest.css';

function LoginForm({Login, error}){
  const [details, setDetails] = useState({email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Log in</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={e =>setDetails({...details, email:e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e =>setDetails({...details, password:e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="LOGIN" />&nbsp;
        <Link to='/intelliq_api/'>
          <input type="submit" value="BACK" />
        </Link>
      </div>
    </form>
  )
}

export default LoginForm;
