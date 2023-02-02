import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAdditionalUserInfo, getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase"



export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const register = async () => {
        console.log("register method")
        try {
            const user = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    }

    const whoIsUid = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.getEmail);
            } else {
                console.log("No User");
            }
        }
   )
        // getAuth()
        //     .getUser(uid)
        //     .then((userRecord) => {
        //         console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        //     })
        //     .catch((error) => {
        //         console.log('Error fetching user data:', error)
        //     });
        }

    return (
        <div className='login-context'>
                <p>Login</p>
            <label className='login-label'>Email</label>
                <input 
                    type='text' 
                    placeholder='email'
                    className='login-input'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                />
            <label className='login-label'>Password</label>
            <input 
                type='password' 
                placeholder='password'
                className='login-input'
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
            />
            <button onClick={register}>Submit</button>
            <button onClick={whoIsUid}>Who is logged in?</button>            
        </div>
    )
}
