import { ReactElement } from "react"
import Layout from "../components/Layout/Layout"
import { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
    return (
        <div className="text-3xl text-green-600 p-2">Hello World</div>
    )
}

Page.getLayout = function getLayout (page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page;