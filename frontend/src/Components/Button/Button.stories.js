import React, { Component } from "react";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button
}

// export const EditProfile = () => <Button variant='editprofile'>Edit Profile</Button>
// export const Student = () => <Button variant='student'>Student</Button>
// export const Mentor = () => <Button variant='mentor'>Mentor</Button>
// export const Search = () => <Button variant='search'>Search</Button>
// export const Search2 = () => <Button variant='search2'>Search</Button>
// export const Filter = () => <Button variant='filter'>Domain</Button>
// export const Confirm = () => <Button variant='confirm'>Confirm</Button>
// export const Login = () => <Button variant='login'>Login</Button>
// export const LoginLong = () => <Button variant='loginLong'>Login</Button>
// export const Signup = () => <Button variant='signup'>Sign up</Button>
// export const Signin = () => <Button variant='signin'>Sign In</Button>
// export const Trynow = () => <Button variant='trynow'>Try Now</Button>



export const  sample = {
    args: {
        content : "hello",
        variant:'secondary',
        onclick : (r)=>{
            console.log("nidsm")    
        },
        width : "full"
    }
}