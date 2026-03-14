import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock axios
jest.mock('./api', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(() => Promise.resolve({ data: { id: 1, name: 'Test', price: 10, description: 'Test product' } })),
  delete: jest.fn(() => Promise.resolve({})),
}));

describe('App Component', () => {
  test('renders product form', () => {
    render(<App />);
    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  });

  test('can submit product form', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test product' } });
    fireEvent.click(screen.getByText(/Add Product/i));
    expect(screen.getByLabelText(/Name/i).value).toBe('');
    expect(screen.getByLabelText(/Price/i).value).toBe('');
    expect(screen.getByLabelText(/Description/i).value).toBe('');
  });
});
