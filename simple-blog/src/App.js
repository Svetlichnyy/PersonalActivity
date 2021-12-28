import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostForm from "./components/UI/PostForm";
import PostList from "./components/PostList";
import MyModal from "./components/UI/MyModal";
import Header from "./components/Header";



function App() {

    const [posts, setPosts] = useState([    ])
    const [postEdit, setPostEdit] = useState({})
    const [open, setOpen] = React.useState(false);


    useEffect(() => {
        const localStorageRef = localStorage.getItem('posts')
        if (localStorageRef) {
            setPosts(JSON.parse(localStorageRef))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    });

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (



            <div className="App">
                <Header />

                <MyModal
                    open={open}
                    setOpen={setOpen}
                >
                    <PostForm
                        setOpen={setOpen}
                        setPostEdit={setPostEdit}
                        setPosts={setPosts}
                        posts={posts}
                        postEdit={postEdit}
                        create={createPost}/>
                </MyModal>

                <PostList
                    setOpen={setOpen}
                    setPostEdit={setPostEdit}
                    remove={removePost}
                    posts={posts}
                    title={"Feed"} />



            </div>


    );
}

export default App;