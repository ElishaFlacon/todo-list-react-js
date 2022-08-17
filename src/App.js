import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';


function App() {
    const [posts, setPosts] = useState([
        { id: 0, title: 'Задача № 1', body: "Удалить эту задачу!" },
    ]);

    const [selectedSort, setSelectedSort] = useState('')

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="app">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MySelect
                    defaultValue="Сортировка"
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={deletePost} posts={posts} title={"Список Задач"} />
                : <h1 style={{ textAlign: 'center' }}>Задач Нет!</h1>
            }
        </div>
    );
}

export default App;