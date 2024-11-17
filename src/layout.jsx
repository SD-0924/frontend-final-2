import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";



export const Layout = (props) => (
    <>
        <Header />
        <main>
            {props.children} 
        </main>
        <Footer />
    </>
)