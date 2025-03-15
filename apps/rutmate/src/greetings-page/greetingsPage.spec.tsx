import { render } from '@testing-library/react';

import GreetingsPage from './greetingsPage';

describe('GreetingsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GreetingsPage />);
    expect(baseElement).toBeTruthy();
  });
});
