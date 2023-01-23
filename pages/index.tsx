import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Modal } from "../components/Modal";
import styles from "../styles/Home.module.scss";
import styled from "styled-components";
import { MainLayout } from "../components/MainLayout";
import { ReactElement } from "react";
import { NestedLayout } from "../components/NestedLayout";
import Image, { ImageLoader } from "next/image";

import catImg from "../public/cat.jpg";
import catImg2 from "../public/cat2.jpg";

const ImgStyle = styled(Image)`
  border: 10px solid green;
`;

const ButtonStyle = styled.button`
  background: green;
  color: white;
`;

const myLoader: ImageLoader = ({ src, width, quality }) => {
  console.log({ src, width, quality });
  return `${src}?w=${width}&q=${quality}&test=1`;
};

export default function Home() {
  const [postId, setPostId] = useState("1");

  const onPostIdChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPostId(e.target.value);
  };

  const goToPost = () => {
    Router.push(`/post/${postId}`);
  };

  return (
    <MainLayout title="Home">
      <h1 className={styles.Title}>Home page</h1>

      <select value={postId} onInput={onPostIdChanged}>
        <option value="1">Post 1</option>
        <option value="2">Post 2</option>
        <option value="3">Post 3</option>
      </select>

      <ButtonStyle onClick={goToPost}>Go to post</ButtonStyle>

      <div style={{ marginBottom: "12vh" }} />

      <Image
        src={catImg}
        alt=""
        sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 33vw,
                100vw"
        style={{ border: "10px solid red " }}
        placeholder="blur"
        loader={myLoader}
        quality={1}
      />

      <ImgStyle
        src="https://w-dog.ru/wallpapers/6/0/511599526961738/kot-vzglyad-mordochka-lezhit-na-polu.jpg"
        alt=""
        width="300"
        height={160}
        placeholder="blur"
        blurDataURL="https://avatanplus.com/files/resources/mid/5786d48a264aa155e6ae3bad.jpg"
        quality={1}
      />
    </MainLayout>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};
