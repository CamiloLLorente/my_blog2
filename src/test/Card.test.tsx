import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card/Card';

describe('Card', () => {
    const title = 'title';
    beforeEach(() => {
        render(
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Card
                    id={1}
                    title={title}
                    description='description'
                    tags={['tag']}
                    date='date'
                    image='image'
                    link='link'
                />
            </BrowserRouter>
        );
    });
    test('renders the card with the correct title', () => {
        expect(screen.getByText('title')).toBeDefined();
    });
    test('renders the card with the correct description', () => {
        expect(screen.getByText('description')).toBeDefined();
    });
    test('renders the card with the correct tag', () => {
        expect(screen.getByText('#tag')).toBeDefined();
    });
    test('renders the card with the correct date', () => {
        expect(screen.getByText('date')).toBeDefined();
    });
    test('renders the card with the correct link', () => {
        const linkElement = screen.getByRole('link', { name: /title/i });
        expect(linkElement).toHaveAttribute('href', '/link');
    });
    test('renders an image with alt text', () => {
        const imageElement = screen.getByRole('img'); // Busca una imagen por su rol.
        expect(imageElement).toHaveAttribute('alt',title ); // Verifica que tenga el atributo alt correcto.
    });
    test('renders default image when no image is provided', () => {
        render(
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Card
                    id={1}
                    title="titulo2"
                    description='description'
                    tags={['tag']}
                    date='date'
                    image=''
                    link='link'
                />
            </BrowserRouter>
        );
        const imageElement = screen.getByRole('img',{ name: /titulo2/i} ); // Busca una imagen por su rol.
        console.log(imageElement);
        expect(imageElement).toHaveAttribute('src', '/public/image/default-image-path.jpg'); // Verifica que utilice la imagen por defecto.
    });
});