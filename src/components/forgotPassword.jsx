import React from 'react';
import  {useState } from 'react';
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import { Toolbar } from '@mui/material';

function ForgotPasswordComponent(props) {

    const[confirmpassword,setConfirmPassword] = useState('');
    const[confirmPasswordError,setConfirmPasswordError] = useState('');
    const[passwordError,setPsswordError]= useState('');
    const[password,setPassword]= useState('');
   

    const[email,setEmail] = useState('');
    const[emailError,setEmailError] = useState('');



   // const location = useLocation();

    let history = useNavigate();


    const handleChange = (e) =>
    {   
        setEmailError('');
        setEmail(e.target.value);
    }


    const confirmPasswordHandler = (e) =>
    {
        setConfirmPasswordError('');
        setConfirmPassword(e.target.value);
    }


    const passwordHandler = (e) =>
    {
        setPsswordError('');
        setPassword(e.target.value);
    }

    const changeHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,iflag=0,nflag=0,mflag=0,cflag=0,sflag=0,colag=0,zflag=0,eflag=0,matchflag=0,pflag=0,cpflag=0,err=0;


            const newLogin={
                    loginEmail:email,
                    loginPassword:password,
    
            };

            
            if(email==="")
            {
                setEmailError("emailId Required");
                iflag++;
            }
            else
            {
                if(iflag===1 && email!=="")
                {
                    iflag--;
                }
            }

            if(password!=="")
            {
                if(pflag===1)
                {
                    pflag--;
                }
                if(password.length<6)
                {
                    setPsswordError("Weak Password");
                    pflag++;
                }
                else
                {
                    if(pflag===1 && password.length>6)
                    {
                        pflag--;
                    }
                }
            }
            else
            {
                setPsswordError("Password Required");
                pflag++;
            }

           
           

            if(confirmpassword==="") 
            {
                setConfirmPasswordError("Password Required");
                cpflag++;
            }
            else
            {
                if(cpflag===1 && confirmpassword!=="")
                {
                    cpflag--;
                }
            }


            if(password!==confirmpassword)
            {
                alert("Passwords do not match");
                matchflag++;
           

            }
            else
            {
                if(matchflag===1 && password===confirmpassword)
                {
                    matchflag--;
                }
                
            }
            
            let sum = iflag+nflag+mflag+cflag+colag+sflag+eflag+pflag+cpflag+matchflag+zflag;
            console.log(sum);
            if(sum===0)
            {

                let data ={
                    password,confirmpassword
                };
                console.log(data);
                axios.put(`http://localhost:8080/login/forgotPassword/${email}`,newLogin)
                .then(response =>{console.log(response);}).catch(err => {alert(err);err++;});
                if(err===0)
                {
                    alert("Password changed");
                    history("/");
                }
                else
                {
                    alert("Failed to change password");
                    history("/forgotPassword")
                }
            }
            

    }


    return (
        <div class="container">
            <Toolbar/>
        <br></br>
        <h1 style={{color:"sandybrown",textAlign:'center'}}>Change Password</h1>
        <br></br><br></br>
        <div class="row">
        <form style={{marginLeft:"100px"}}>
        <div class="row">
                <div class="col-10">
                    <div className='form-group'>
                        <div class="row">
                            <div style={{textAlign:"left"}}>
                                <label>Email Id</label><span style={{color:"red"}}>* </span>
                            </div>
                        </div>
                        
                        <br></br>
                        <input type="text" name="email"  placeholder='Enter User EmailId'  value={email} onChange={handleChange} class="form-control"></input>
                        <div style={{textAlign:"left"}}>
                            {emailError && <span style={{color:'red'}}>{emailError}</span>} 
                        </div>
                    </div>
                </div>
                </div>
                <br></br>
            
            <div class="row">
                <div class="col-5">
                <div className='form-group'>
                <div style={{textAlign:"left"}}>
                        <label>Password</label><span style={{color:"red"}}> * </span>
                </div>
                        <br></br>
                        <input type="password" name="password" id="password" value={password} placeholder='Enter password' onChange={passwordHandler} class="form-control"></input>
                        <div style={{textAlign:"left"}}>
                            {passwordError && <span style={{color:'red'}}>{passwordError}</span>} 
                        </div>
                    </div>
                </div>
                <div class="col-5">
                <div className='form-group'>
                <div style={{textAlign:"left"}}>
                        <label>Confirm Password</label><span style={{color:"red"}}> * </span>
                    </div>
                        <br></br>
                        <input type="password" name="confirmpassword" id="confirmpassword" value={confirmpassword} placeholder='Enter password' onChange={confirmPasswordHandler} class="form-control"></input>
                        <div style={{textAlign:"left"}}>
                            {confirmPasswordError && <span style={{color:'red'}}>{confirmPasswordError}</span>} 
                        </div>
                    </div>
                </div>
                
            </div>
          
            <br></br><br></br>
            <div class="row">
                <div class="col-8"></div>
                <div className='form-group' class="col-2">
                
                <button class="btn btn-success form-control"  onClick={changeHandler} >Change Password</button> 
                </div>
            
            </div>
            

            <br></br><br></br>
        </form>
        </div>
       
    </div>
    );
}

export default ForgotPasswordComponent;