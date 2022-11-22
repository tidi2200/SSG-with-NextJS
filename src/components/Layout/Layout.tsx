import { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from '../../styles/Home.module.css';

export default function Layout ({ children }: { children: ReactElement }) {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
            <Footer/>
        </>
    )
}