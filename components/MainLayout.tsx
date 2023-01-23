import { ReactNode, useState } from 'react';
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

export interface MainLayoutProps {
  title?: string;
  children: ReactNode;
}

const HeaderStyle = styled.header`
  padding: 2rem;
  background: darkblue;
  color: white;
`

const NavigationStyle = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  li:not(:last-child) {
    margin-right: 1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const ContentStyle = styled.main`
  padding: 2rem;
`

export function MainLayout({ children, title = "Next App" }: MainLayoutProps) {
 
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderStyle>
        <NavigationStyle>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/post/1">Post 1</Link>
            </li>
            <li>
              <Link href="/about/contacts">Contacts</Link>
            </li>
          </ul>
        </NavigationStyle>
        
      </HeaderStyle>
      <ContentStyle>{children}</ContentStyle>
    </>
  );
}
