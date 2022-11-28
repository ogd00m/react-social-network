import React from 'react';
import s from './Post.module.css'

const Post = (props) => {



    return (
        <div className={s.item}>
            <img src='https://static.nationalgeographic.co.uk/files/styles/image_3200/public/MAIN_mask_only.jpg'/>
            { props.message }
            <div>
                <span>like</span>
                { props.likes }
                <br/>
                {props.published_at}
            </div>
        </div>
    )
}

export default Post;