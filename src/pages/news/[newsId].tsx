import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import { NextPageWithLayout } from "../_app";

interface INewsPost {
    data: News
}

type News = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const NewsPost: NextPageWithLayout<INewsPost> = (props : INewsPost) => {
    return (
        <>
            <Head>
                <title>{props.data.title}</title>
            </Head>
            <div>Title: {props.data?.title}</div>
            <h2>Content: {props.data?.body}</h2>
        </>
    )
}

export async function getStaticProps (context: any) {
    const { params } = context;
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.newsId}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths () {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    const newsId = data.map((item: { id: number; }) => item.id);
    const params = newsId.map((id: number) => ({ params: { newsId: id + '' } }))
    return {
        paths: params,
        fallback: false
    }
}

NewsPost.getLayout = function getLayout (page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default NewsPost;
