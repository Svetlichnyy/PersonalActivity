import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const Profile = () => {

    const [myProfile,setMyProfile] = useState({lname:'', fname:'', email:'', password:'', id: 0})

    useEffect(() => {
        const localStorageRef = localStorage.getItem('accs')
        const accs = JSON.parse(localStorageRef)
        accs.forEach(acc => {
            if(acc.lname === JSON.parse(localStorage.currentUser).lname){
                setMyProfile({lname:acc.lname, fname:acc.fname, email:acc.email, password:acc.password, id: acc.id})

            }
        })
    }, []);

    function editMyProfile(e){
        e.preventDefault()
        let accs = JSON.parse(localStorage.accs)
        let currentUser = JSON.parse(localStorage.currentUser)
        let posts = JSON.parse(localStorage.posts)
        accs = accs.map(acc => {
            if(acc.id === myProfile.id)
            {
                acc.lname=myProfile.lname
                acc.fname=myProfile.fname
                acc.email=myProfile.email
                acc.password=myProfile.password
            }
            return acc;
            })
        posts = posts.map(post =>{
            if(post.author.fname === currentUser.fname){
                post.author.fname = myProfile.fname
                post.author.lname = myProfile.lname
            }
            return post;
        })
        currentUser.lname=myProfile.lname
        currentUser.fname=myProfile.fname
        localStorage.accs=JSON.stringify(accs)
        localStorage.posts=JSON.stringify(posts)
        localStorage.currentUser=JSON.stringify(currentUser)
    }

    return (
        <div className="App">
            <Header/>
            <Typography variant="h2" component="h2">
                There is some inputs <br/>
                to edit your account =)
            </Typography>
            <Box sx={{
                paddingTop:'100px',
                margin:'0 auto',
                display:"flex",
                flexDirection:'column',
                justifyContent: 'spaceBetween',
                width: 1000,
                height:1000,
                maxWidth: '100%',
            }}>
                <TextField sx={{margin:'35px 0'}}
                           id="standard-basic"
                           label="First Name"
                           variant="standard"
                           value={myProfile.fname}
                           onChange={e => setMyProfile({...myProfile, fname: e.target.value})}>


                </TextField>
                <TextField sx={{margin:'35px 0'}}
                           id="standard-basic"
                           label="Last Name"
                           variant="standard"
                           value={myProfile.lname}
                           onChange={e => setMyProfile({...myProfile, lname: e.target.value})}>


                </TextField>
                <TextField sx={{margin:'35px 0'}}
                           id="standard-basic"
                           label="Email"
                           variant="standard"
                           value={myProfile.email}
                           onChange={e => setMyProfile({...myProfile, email: e.target.value})}>


                </TextField>
                <TextField sx={{margin:'35px 0'}}
                           id="standard-basic"
                           label="Password"
                           variant="standard"
                           value={myProfile.password}
                           onChange={e => setMyProfile({...myProfile, password: e.target.value})}>

                </TextField>
                <Button variant="outlined" onClick={e => editMyProfile(e)} >
                    EDIT
                </Button>
            </Box>
        </div>
    );
};

export default Profile;