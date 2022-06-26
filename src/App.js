import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';


function App() {
    const [posts, setPosts] = useState([
        { id: 0, title: 'Задача № 1', body: "Удалить эту задачу!" },
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="app">
            <PostForm create={createPost} />
            <PostList remove={deletePost} posts={posts} title={"Список Задач"} />
        </div>
    );
}

export default App;