import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('Renderizar about', () => {
    render(<About />);
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
});

test('Renderizar parrafo', () => {
    render(<About />);
    expect(screen.getByText(/Soy un desarrollador apasionado/i)).toBeInTheDocument();
});


