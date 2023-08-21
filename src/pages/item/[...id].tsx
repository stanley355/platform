import React from 'react';
import Layout from '@/components/common/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';

const ItemPage = (props: any) => {
  const { path } = props;

  return (
    <Layout>
      hi
    </Layout>
  )
};

export default ItemPage;
export const getStaticProps: GetStaticProps = (ctx: any) => {
  const idPath = ctx?.params?.id.slice(0, 3).join("/");

  return {
    props: {
      path: "/" + idPath
    },
    revalidate: 60 * 60 // 1 hour
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  }
}