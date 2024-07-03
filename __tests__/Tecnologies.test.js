// Tecnologies.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tecnologies from '../components/Tecnologies';

test('Renderizar categorias', () => {
    render(<Tecnologies />);
    
    // Verifica que las categorías estén presentes
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Diseño')).toBeInTheDocument();
    expect(screen.getByText('Otras tecnologias')).toBeInTheDocument();
});

test('Renderizar icono', () => {
    render(<Tecnologies />);
    
    // Verifica que los íconos estén presentes y tengan los atributos alt correctos
    expect(screen.getByAltText('HTML5')).toBeInTheDocument();
    expect(screen.getByAltText('CSS3')).toBeInTheDocument();
    expect(screen.getByAltText('JavaScript')).toBeInTheDocument();
    expect(screen.getByAltText('Python')).toBeInTheDocument();
    expect(screen.getByAltText('Java')).toBeInTheDocument();
    expect(screen.getByAltText('MySQL')).toBeInTheDocument();
    expect(screen.getByAltText('Springboot')).toBeInTheDocument();
    expect(screen.getByAltText('Git')).toBeInTheDocument();
    expect(screen.getByAltText('Photoshopt')).toBeInTheDocument();
    expect(screen.getByAltText('Figma')).toBeInTheDocument();
});

test('Verificar CSS', () => {
    render(<Tecnologies />);
    
    expect(screen.getByText('Front-End').closest('div')).toHaveClass('category');
    expect(screen.getByText('Back-End').closest('div')).toHaveClass('category');
    expect(screen.getByText('Diseño').closest('div')).toHaveClass('category');
    expect(screen.getByText('Otras tecnologias').closest('div')).toHaveClass('category');
});
