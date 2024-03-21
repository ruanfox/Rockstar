import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";

export function PaginaBase(){
    return(
        <main>
            <Header />
            <Container>
                <Outlet/>
            </Container>
            <Footer />
        </main>
    )
}