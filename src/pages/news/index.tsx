import { ReactElement } from "react"
import Layout from "../../components/Layout/Layout"
import { NextPageWithLayout } from "../_app"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardItem from "../../components/Common/CardItem";
import Head from "next/head";

interface IPage {
    data: PostType
}

type PostType = {
    map(arg0: (item: { id: number; title: string; body: string }) => JSX.Element): import("react").ReactNode
    userId: number,
    id: number,
    title: string,
    body: string
}

const Page: NextPageWithLayout<IPage> = (props: IPage) => {
    return (
        <>
            <Head>
                <title>News</title>
            </Head>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                    {props.data.map(item => {
                        return (
                            <Grid item xs={12} md={4} xl={3} key={item.id}>
                                <CardItem data={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}

Page.getLayout = function getLayout (page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export async function getServerSideProps () {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    return {
        props: {
            data
        }
    }
}

export default Page;
