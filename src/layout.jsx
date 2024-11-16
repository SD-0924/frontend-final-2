import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"

export const Layout = (props) => (
    <>
        <Header />
        <main>
            {props.children}
        </main>

        <Footer />
    </>
)