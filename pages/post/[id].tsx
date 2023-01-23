import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { MainLayout } from "../../components/MainLayout";
import { Post } from "../../types";

export interface SinglePostProps {
  post: Post;
}

const SinglePost: NextPage<SinglePostProps> = ({ post }) => {
  return (
    <MainLayout title="Post">
      <h1>Post {post.title}</h1>
      <div>{post.body}</div>
    </MainLayout>
  );
};

export default SinglePost;

export const getStaticPaths: GetStaticPaths = async() => {
  const ids = Array(10).fill(null).map((_, i) => `${i + 1}`)
  return {
    paths: ids.map(id => ({ params: { id }})) ,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await response.json();
  return {
    props: {
      post
    }
  }
}
