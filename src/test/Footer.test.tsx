import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe('Footer',()=>{
    beforeEach(()=>{
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        );
    });
    test('shold render footer',()=>{
        expect(screen.getByText(/todos los derechos reservados/i)).toBeInTheDocument();
    })

})