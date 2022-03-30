import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/post/postSlice'
import PostItem from './PostItem'


const Posts = () => {
    const posts = useSelector((state) => state.post.posts)

    const dispatch = useDispatch()
    return (
        <div>
            <h5>Нажмите на кнопку ниже чтобы получить список постов с сайта JsonPlaceholder</h5>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
                onClick={() => dispatch(getPosts())}
            >
                Get posts
            </button>
            {posts?.map(post => (
                <PostItem key={post.title} post ={post}/>
            ))}
            
        </div>
    )
}

export default Posts
