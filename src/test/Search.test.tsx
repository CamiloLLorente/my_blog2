import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "../components/Search";
import userEvent from "@testing-library/user-event";

describe("Search", () => {  
    const mockOnSearch = vi.fn();
    beforeEach(() => {  
        render(
            <BrowserRouter>
                <Search onSearch={mockOnSearch}/>
            </BrowserRouter>
        );
    });
    
    test("should render search input and button", () => {

        // Verifica que el campo de texto existe
        const input = screen.getByPlaceholderText('Buscar artículos...');
        expect(input).toBeInTheDocument();
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('updates the input value when typing', async () => {
        const input = screen.getByPlaceholderText('Buscar artículos...');
        const user = userEvent.setup();
        await user.type(input, 'React Testing');
        expect(input).toHaveValue('React Testing');
    });

    it('calls onSearch with the correct query when the form is submitted', async () => {
        
        const input = screen.getByPlaceholderText('Buscar artículos...');
        const button = screen.getByRole('button');
        const user = userEvent.setup();

        // Escribe en el input y envía el formulario
        await user.type(input, 'React Testing');
        await user.click(button);

        // Verifica que se llama a la función onSearch con el valor correcto
        expect(mockOnSearch).toHaveBeenCalledWith('React Testing');
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });
    

});