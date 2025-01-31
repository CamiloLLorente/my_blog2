import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Blog from "../../pages/blog/Blog";
import { usePosts } from "../../hook/post";
import userEvent from "@testing-library/user-event";
describe("Blog", () => {
    // Mock del hook usePosts
    
    vi.mock('../../hook/post', () => ({
        usePosts: vi.fn().mockReturnValue({
        posts: [
            { id: 1, title: 'Post 1', description: 'Description 1', tags: ["tag1","tag2"], date: '02-12-2024', image: '', },
            { id: 2, title: 'Post 2', description: 'Description 2', tags: ["tag1","tag2"], date: '02-12-2024', image: '', },
        ],
        filteredPosts: [
            { id: 1, title: 'Post 1', description: 'Description 1', tags: ["tag1","tag2"], date: '', image: '', },
        ],
        setFilteredPosts: vi.fn(),
        }),
    }));

    beforeEach(() => {  
        render(
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Blog />
            </BrowserRouter>
        );
    });

    it('should render the search component', () => {
        console.log(screen.debug());
        expect(screen.getByPlaceholderText('Buscar artículos...')).toBeInTheDocument();
    });

    it('should render the data postsFilter correctly', () => {
        const dataToFind = ['Post 1', 'Description 1', 'tag1', 'tag2'];
        dataToFind.forEach((data) => {
            expect(screen.getByText(new RegExp(data, 'i'))).toBeInTheDocument();
        });
    });

    test('calls setFilteredPosts when search is performed', async () => {
        
        const searchInput = screen.getByPlaceholderText('Buscar artículos...');
        console.log(searchInput);
        const button = screen.getByRole('button');
        const user = userEvent.setup();
        
        // Simular un cambio en el input de búsqueda
        fireEvent.change(searchInput, { target: { value: 'Post 2' } });
        await user.click(button);
        // Verificar que setFilteredPosts fue llamado
        expect(usePosts().setFilteredPosts).toHaveBeenCalledWith([
          { id: 2, title: 'Post 2', description: 'Description 2', tags: ["tag1","tag2"], date: '02-12-2024', image: '', }
        ]);
    });



});