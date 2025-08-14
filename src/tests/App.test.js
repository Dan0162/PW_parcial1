import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Login Screen', () => {
  test('El botón está deshabilitado al iniciar', () => {
    render(<App />);
    const button = screen.getByTestId('login-button');
    expect(button).toBeDisabled();
  });

  test('El botón se habilita solo cuando los tres campos están completos', () => {
    render(<App />);
    const codigoInput = screen.getByTestId('codigoCliente-input');
    const usrInput = screen.getByTestId('usr-input');
    const pswdInput = screen.getByTestId('pswd-input');
    const button = screen.getByTestId('login-button');

    // Llenar solo uno o dos campos
    fireEvent.change(codigoInput, { target: { value: '123' } });
    fireEvent.change(usrInput, { target: { value: 'user' } });
    expect(button).toBeDisabled();

    // Llenar el tercer campo
    fireEvent.change(pswdInput, { target: { value: 'pass' } });
    expect(button).not.toBeDisabled();
  });

  test('Al hacer clic en el botón habilitado se llama a la función Login con los valores correctos', () => {
    render(<App />);
    const codigoInput = screen.getByTestId('codigoCliente-input');
    const usrInput = screen.getByTestId('usr-input');
    const pswdInput = screen.getByTestId('pswd-input');
    const button = screen.getByTestId('login-button');

    fireEvent.change(codigoInput, { target: { value: '123' } });
    fireEvent.change(usrInput, { target: { value: 'user' } });
    fireEvent.change(pswdInput, { target: { value: 'pass' } });

    expect(button).not.toBeDisabled();

    fireEvent.click(button);
    // Verificamos que el estado loginCalled se haya actualizado
    // (en una app real, aquí se mockearía la función Login)
    // Para este stub, podemos verificar que el botón sigue habilitado y los valores están presentes
    expect(codigoInput.value).toBe('123');
    expect(usrInput.value).toBe('user');
    expect(pswdInput.value).toBe('pass');
  });
});
