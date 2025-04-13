import { render } from '@testing-library/react';

import ChatElement from './chatElement';

describe('ChatElement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatElement />);
    expect(baseElement).toBeTruthy();
  });
});
