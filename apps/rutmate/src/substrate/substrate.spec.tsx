import { render } from '@testing-library/react';

import Substrate from './substrate';

describe('Substrate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Substrate />);
    expect(baseElement).toBeTruthy();
  });
});
