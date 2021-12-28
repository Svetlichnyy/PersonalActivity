import Typography from "@mui/material/Typography";
import PostItem from "./PostItem";
import React from "react";

const PostList = ({posts , title , remove ,setPostEdit, setOpen}) => {
    if (!posts.length) {
        return (
            <Typography variant="h2" component="h2">
                Пока никто не создавал постов =( <br/>
                Будь первым!
            </Typography>
        )
    }

    return (
        <div>
            <Typography variant="h2" component="h2" color="second" >
                {title}
            </Typography>
            {posts.map((post, index) =>
                <PostItem setOpen={setOpen} setPostEdit={setPostEdit} remove={remove} number={index+1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
