import { render } from '@testing-library/react';

import NavBar from './navBar';

describe('NavBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavBar />);
    expect(baseElement).toBeTruthy();
  });
});
