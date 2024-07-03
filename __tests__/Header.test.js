import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Renderizar encabezado', () => {
    render(<Header/>);
    // Nombre
    expect(screen.getByText('GonzDev')).toBeInTheDocument()
    // Imagen
    expect(screen.getByAltText('Profile')).toBeInTheDocument()
});
