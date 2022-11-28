import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://www.w3schools.com/w3css/img_lights.jpg' alt='avatar'/>
        </div>
        <div>
            Avatar + description
        </div>
        <MyPosts/>

    </div>
}

export default Profile;