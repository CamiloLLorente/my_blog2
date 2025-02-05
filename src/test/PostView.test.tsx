import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from 'vitest';
import * as usePostViewHook from "../hook/post";

import PostView from "../pages/blog/PostView";
import NotFound from "../pages/NotFound";

describe("PostView", () => {
  beforeEach(() => {
    vi.clearAllMocks();
      render(
          <BrowserRouter>
              <PostView />
          </BrowserRouter>
      );
  });

  const usePostViewSpy = vi.spyOn(usePostViewHook, 'usePostView');

  test('Should navigate to the Page Not Found screen.', () => {
    render(
      <MemoryRouter initialEntries={["/post/23"]} >
        <Routes>
          <Route path="/post/:id?" element={<PostView />} />
          <Route path='/404_no_found' element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    console.log(screen.debug());

    expect(screen.getAllByText("Página no encontrada").length).toBeGreaterThan(1);
  });


 
  
  it('should render post content correctly', () => {
    usePostViewSpy.mockReturnValue({
      post: {
        id: 2,
        title: "El nuevo naciemiento",
        description: "Descubre cómo escribir CSS limpio y mantenible para tus proyectos web.",
        date: "2024-03-10",
        views: 1200,
        tags: ["css", "frontend", "tutorial"],
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        content: "El CSS (Cascading Style Sheets) es fundamental para dar estilo y diseño a nuestras páginas web. Sin embargo, a medida que los proyectos crecen, mantener un CSS limpio y organizado puede convertirse en un desafío. En este artículo, compartiremos algunas de las mejores prácticas para escribir CSS mantenible y escalable..."
      }
    });

    render(
      <MemoryRouter initialEntries={['/post/1']}>
        <Routes>
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </MemoryRouter>
    );
    console.log(screen.debug());
    const searchToWords = ["El nuevo naciemiento", "2024-03-10","El CSS (Cascading Style Sheets) es fundamental para dar estilo y diseño a nuestras páginas web. Sin embargo, a medida que los proyectos crecen, mantener un CSS limpio y organizado puede convertirse en un desafío. En este artículo, compartiremos algunas de las mejores prácticas para escribir CSS mantenible y escalable..."];
    searchToWords.forEach((word) => {
      expect(screen.getByText(word)).toBeInTheDocument();  
    }); 
    // expect(screen.getAllByText("Página no encontrada").length).toBeGreaterThan(1);
  });

  it('Should navigate to the Page Not Found screen ', () => {
    
    usePostViewSpy.mockClear();
    usePostViewSpy.mockReturnValue({
      post: null
    });


    render(
      <MemoryRouter initialEntries={['/post/1']}>
        <Routes>
          <Route path="/post/:id" element={<PostView />}  />
        </Routes>
      </MemoryRouter>
    );
    console.log("ejecutando test");
    expect(screen.getAllByText("Página no encontrada").length).toBeGreaterThanOrEqual(1);
    
  });
  
 

});