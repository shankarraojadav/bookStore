import { Button } from '@mui/material';
import { useState } from 'react';
import { AuthenticateLogin, SignupNewUser } from '../../service/api';
import './useraccount.css';


const UserAccount = ({Account, setAccount}) => {
    const [togglelogin, setToggleLogin] = useState(true);
    const [login, setLogin] = useState({});
    const [signup, setSignup] = useState({});
    const [error, setError] = useState('')

    const onLoginValue = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    };

    const onSignupValue = (e) => {
           setSignup({...signup, [e.target.name]: e.target.value})
    };

   
    const LoginUser =async () => {
     const response = await AuthenticateLogin(login);
     if(response.status == 200) {
      setAccount(true)
     }  
    };

    const SignupUser =async () => {
      const response = await SignupNewUser(signup);
      if(response.status ==200) {
           setAccount(true)
      }
          if(!response) return;
    }

    
    
    return (
        <div className="account">
           { togglelogin ?
             <div className="login">
                <h1 style={{fontFamily:"cursive", color:"#fb641b"}}>Login</h1>
             <p>{error}</p>
             <input className='inp_box' type="text" placeholder="username" name="username" onChange={ onLoginValue} required/>
             <input className='inp_box' type="password" placeholder="password" name="password" onChange={ onLoginValue} required/>
             <Button variant="contained"  style={{width:"100px", alignSelf:"center"}} onClick={LoginUser}>Login</Button>
             <Button onClick={() => setToggleLogin(false)} className='newAccount' variant="contained">New here? SignUp</Button>
          </div> :
         <div className="signup">
            <h1 style={{fontFamily:"cursive", color:"#fb641b"}}>Register</h1>
            {error}
             <input className='inp_box' required type="text" placeholder="username" name="username" onChange={onSignupValue} />
             <input className='inp_box' type="password" placeholder="password" name="password" onChange={onSignupValue}/>
             <input className='inp_box' type="text" placeholder="created at" name="Cat" onChange={onSignupValue}/>
             <input className='inp_box' type="password" placeholder="created by" name="Cby" onChange={onSignupValue}/>
             <Button variant="contained" style={{width:"100px", alignSelf:"center"}} onClick={SignupUser}>Signup</Button>
             <Button onClick={() => setToggleLogin(true)} className='newAccount' variant="contained">Already Have Account</Button>
         </div>
           }
        </div>
    )
}

export default UserAccount;