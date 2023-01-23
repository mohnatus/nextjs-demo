import { MainLayout } from "../components/MainLayout";
import { Post } from "../types";
import Link from "next/link";
import styled from "styled-components";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import { NestedLayout } from "../components/NestedLayout";

interface PostPreviewProps {
  post: Post;
}

export interface PostsProps {
  posts: Array<Post>;
}

const PostPreviewStyle = styled.article`
  margin: 1rem 0;
  h2 {
    margin-bottom: 1rem;
  }
`;

function PostPreview({ post }: PostPreviewProps) {
  return (
    <PostPreviewStyle>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/post/${post.id}`}>Перейти</Link>
    </PostPreviewStyle>
  );
}

const Posts: NextPageWithLayout<PostsProps> = function Posts({ posts }) {
  return (
    <MainLayout title="Posts">
      <h1>Posts page</h1>

      <div>
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </MainLayout>
  );
};

Posts.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export default Posts;

export const getStaticProps: GetStaticProps<{
  posts: Array<Post>;
}> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
};
