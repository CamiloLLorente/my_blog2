import { render, screen } from "@testing-library/react";
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom";

describe('Header', () =>{
    beforeEach(() => {  
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );
    });
    test('should render navigation links correctly', () => {
        const links = ['Inicio', 'Blog', 'Descubre y Aprende', 'Contacto'];
        links.forEach(linkText => {
            expect(screen.getByText(linkText)).toBeInTheDocument();
        });
    })

    // test('should navigate to the correct page on click', async () => {
    //     const user = userEvent.setup();
    
    //     // Verifica que los enlaces existen
    //     const blogLink = screen.getByText('Blog');
        
    //     // Simula el clic en el enlace "Blog"
    //     await user.click(blogLink);
        
    //     // Comprueba que el contenido de la página cambió a "Blog Page"
    //     expect(screen.getByText('Blog')).toBeInTheDocument();
        
    //     const descubreLink = screen.getByText('Descubre y Aprende');
    //     console.log(descubreLink);
    //     // Simula el clic en el enlace "Descubre y Aprende"
    //     await user.click(descubreLink);
    //     screen.debug();
    //     // Comprueba que el contenido de la página cambió a "Descubre Page"
    //     // expect(screen.getByText(/Aprende y Diviertete/i)).toBeInTheDocument();
    // });
   
});