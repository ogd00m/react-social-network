import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='hi guys' likes='5' published_at='Today'/>
                <Post message='im still alive' />

            </div>
        </div>

    )
}

export default MyPosts;