import '@/styles/globals.css'
import '@/styles/global.scss'
import React, {useState,useEffect} from 'react';
import { Layout } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
    
  )
}
