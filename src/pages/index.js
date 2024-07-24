import { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import UrlForm from "@/components/UrlForm";
import UrlList from '@/components/UrlList';
import Cta from '@/components/Cta';

import useLocalStorage from '@/hooks/useLocalStorage';

import { getLocalData } from '@/lib/localData';
import Card from '@/components/Card';

export async function getStaticProps() {
  const data = getLocalData();
  console.log('data: ', data)
  return {
    props: { data }
  }
}

export default function Home({ data }) {
  console.log('data: ', data)
  const [width, setWidth] = useState(null);
  const [urlList, setUrlList] = useLocalStorage("urls", []);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width < 768;
  console.log(`isMobile: ${isMobile}`)

  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <Hero {...data.hero} />
        <UrlForm isMobile={isMobile} setUrlList={setUrlList} />
        <UrlList isMobile={isMobile} urlList={urlList} />
        <section className='main-content'>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <div className='card-container'>
            {data.cards.map(card => <Card key={card.id} {...card} />)}
          </div>
          <Cta {...data.cta} />
        </section>
        <Footer {...data.footer} />
      </main>
    </>
  );
}
