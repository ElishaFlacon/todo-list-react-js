import React from 'react'
import MyButton from './UI/button/MyButton';


function Post(props) {

    return (
        <div className="post">

            <div className="post__content">
                <h2 className="post__name">{props.number}. {props.post.title}</h2>
                <div className="post__description">{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>

        </div>
    )
}

export default Post;