import { createTheme, ThemeProvider } from "@mui/material";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

const theme = createTheme
    ({
        typography: {
            fontFamily: 'Inter',
            h1: {
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'black'
            },
            h2: {
                fontSize: '1.6rem',
                fontWeight: 'bold',
                color: 'black'
            },
            h3: {
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: 'black'
            },
            h4: {
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'black'
            },
        }
    })

export const Layout = (props) => (
    <>
        <ThemeProvider theme={theme}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </ThemeProvider>
    </>
)