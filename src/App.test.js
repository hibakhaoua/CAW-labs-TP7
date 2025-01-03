import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Affiche le menu et permet d’ajouter des plats au panier', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Pizza'));
  fireEvent.click(screen.getByText('Ajouter au panier', { name: /margherita/i }));
  expect(screen.getByText('Votre Panier')).toBeInTheDocument();
  expect(screen.getByText('Margherita')).toBeInTheDocument();
});
