import React from 'react'
import { deletePostById } from '../features/post/postSlice'
import { useDispatch } from 'react-redux'

const PostItem = ({post}) => {
    const dispatch = useDispatch()
    return (
        <>
            <div
       
        className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
            {post.title}
        </div>
        <button 
        className='bg-lime-300  hover:bg-red-400 transition-all p-2 text-sm'
         onClick={() => dispatch(deletePostById(post.id))}>Удалить пост</button>
        </>
        
    )
}

export default PostItem
