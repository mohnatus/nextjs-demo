import { Post } from '../types';


import { NextPage } from 'next';

interface PostsProps {
    posts: Array<Post>
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
    return <div></div>
}

export default Posts;




