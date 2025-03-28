import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe("Home", () => {    
    it("should render the Home component", () => {
        render(
            <MemoryRouter>
              <Home />
            </MemoryRouter>
        );
      
          expect(screen.getByText("El camino, la verdad y la vida.")).toBeInTheDocument();
          expect(screen.getByText("LO MÁS VISTO")).toBeInTheDocument();
          expect(screen.getByText("Enriquese tus conocimientos")).toBeInTheDocument();
    });


});