import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/App.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MyButton from "./UI/MyButton";

const PostItem = (props) => {

    function editPost (e,post){
        e.preventDefault()
        post.type="edit"
        props.setPostEdit(post)
        props.setOpen(true)
    }


    return (
        <Card sx={{ maxWidth: 'md' }} className="Post">

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.number}. {props.post.title}
                </Typography>
                <Typography variant="body2" color="text.third">
                    {props.post.body}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                alt="some post"
                height="140"
                style={{borderRadius:'10px'}}
                image= "https://placekitten.com/868/141"
            />
            <CardActions style={{display:"flex", justifyContent:"space-around"}}>
                <Typography variant="body3" color="text.first" padding-top="2">
                    Author: {props.post.author.fname} {props.post.author.lname}
                </Typography>
                <Typography variant="body3" color="text.secondary" padding-top="2">
                    Date: {props.post.date}
                </Typography>

                {localStorage.currentUser === JSON.stringify(props.post.author)
                    ?
                    <MyButton
                    style={{marginTop: '7px'}}
                    onClick={(e) =>

                        editPost(e, props.post)}
                    >
                        Edit
                    </MyButton>
                    :
                    <MyButton
                        disabled
                        style={{marginTop: '7px'}}
                    >
                        Edit
                    </MyButton>
                    }
                {localStorage.currentUser === JSON.stringify(props.post.author)
                    ?
                    <IconButton
                    aria-label="delete" size="large"
                    onClick={() => props.remove(props.post)}
                    >
                    <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                    :
                    <IconButton
                        aria-label="delete" size="large" disabled
                    >
                    <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                }

            </CardActions>
        </Card>
    );
}
export default PostItem;