import React, {useEffect, useState} from 'react';
import MyInput from "./MyInput";
import MyButton from "./MyButton";


const PostForm = ({create, postEdit, posts, setPosts,setPostEdit, setOpen}) => {

    const [post, setContent]= useState({title: '' , body: '', date: '' , author: JSON.parse(localStorage.getItem('currentUser'))})

    useEffect(()=>{

        if(postEdit.type === "edit"){
            setContent(postEdit)
        }
    },[])

    const editPost = (e) => {
        e.preventDefault()
        setPosts(posts.map(currentPost => {
            if (currentPost.id === postEdit.id)    {
                currentPost.title = post.title
                currentPost.body = post.body
            }
            return currentPost
        }))
        setPostEdit({})
        setOpen(false)
    }

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now(),date: new Date().toLocaleString()
        }
        console.log(newPost)
        create(newPost)
        setContent({title: '' , body: '' , date: ''});
        setOpen(false)
    }

    return (
        <form>
            <MyInput

                value={post.title}
                onChange={e => setContent({...post, title: e.target.value})}
                type="text"
                placeholder="Post title"
            />
            <MyInput
                value={post.body}
                onChange={e => setContent({...post, body: e.target.value})}
                type="text"
                placeholder="Post content"
            />


            <MyButton style={{marginTop:'50px'}} onClick={
                postEdit.type==="edit"
                ?editPost :addNewPost}>Edit/Add</MyButton>
        </form>
    );
};

export default PostForm;