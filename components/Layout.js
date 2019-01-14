import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Wrap from './Wrap'



export default props => {
  
  return (
    <Wrap>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
          />
         </Head>
        <div>
          <Header />
          
            {props.children}
            
        </div>
        
        </Wrap>
  );
};

