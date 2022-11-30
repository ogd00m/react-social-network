import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return <div>
        <div className={s.profileHeader}>
            <img
                src='https://p.favim.com/orig/2018/11/13/dark-header-twitter-Favim.com-6525026.jpg' alt='avatar'/>
        </div>
        <div className={s.item}>
            Avatar + description
        </div>
        <MyPosts/>

    </div>
}

export default Profile;