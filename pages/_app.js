import React, {useEffect, useState} from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp

//npx create-next-app -e with-tailwindcss ./
//npm install graphql graphql-request html-react-parser moment react-multi-carousel sass
