import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '', });


    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        if (newPost.title === '' || newPost.body === '') {
            setPost({ title: 'ВВЕДИТЕ НАЗВАНИЕ', body: 'ВВЕДИТЕ ОПИСАНИЕ', });
        } else {
            create(newPost)
            setPost({ title: '', body: '', });
        };
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название задачи"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание задачи"
            />
            <MyButton onClick={addNewPost}>Создать задачу</MyButton>
        </form>
    )
}

export default PostForm