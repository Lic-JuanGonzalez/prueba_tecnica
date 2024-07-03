import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import ContactForm from '../components/ContactForm';

beforeAll(() => {
    global.alert = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

test('Renderizar ContactForm', () => {
    render(<ContactForm />);
    expect(screen.getByText('Nombre:')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Mensaje:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
});

test('Campos formulario', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Nombre:');
    const emailInput = screen.getByLabelText('Email:');
    const messageTextarea = screen.getByLabelText('Mensaje:');
    
    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    fireEvent.change(emailInput, { target: { value: 'juan@gmail.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hola, me llamo...' } });
    
    expect(nameInput.value).toBe('Juan');
    expect(emailInput.value).toBe('juan@gmail.com');
    expect(messageTextarea.value).toBe('Hola, me llamo...');
});

test('Envio formulario', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Nombre:');
    const emailInput = screen.getByLabelText('Email:');
    const messageTextarea = screen.getByLabelText('Mensaje:');
    const submitButton = screen.getByRole('button', { name: /Enviar/i });
    
    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    fireEvent.change(emailInput, { target: { value: 'juan@egmail.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hola, este es un mensaje...' } });
    
    fireEvent.click(submitButton);
    
    expect(global.alert).toHaveBeenCalledWith('Mensaje enviado con éxito!');
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageTextarea.value).toBe('');
});
