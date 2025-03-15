import { render } from '@testing-library/react';

import Typo from './typo';

describe('Typo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typo />);
    expect(baseElement).toBeTruthy();
  });
});
