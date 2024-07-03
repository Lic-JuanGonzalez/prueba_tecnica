// Interests.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Interests from '../components/Interests';

test('Interes', () => {
    const testInterests = ['Programación', 'Lectura', 'Viajes', 'Música'];
    render(<Interests interests={testInterests} />);
    
    // Verifica que todos los intereses estén presentes
    testInterests.forEach(interest => {
        expect(screen.getByText(interest)).toBeInTheDocument();
    });
});

test('Renderizar lista vacia', () => {
    render(<Interests interests={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
});

test('Verificar <li>', () => {
    const testInterests = ['Programación', 'Lectura', 'Viajes', 'Música'];
    render(<Interests interests={testInterests} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(testInterests.length);
    listItems.forEach((item, index) => {
        expect(item.tagName).toBe('LI');
        expect(item.textContent).toBe(testInterests[index]);
    });
});
