import { render } from '@testing-library/react';

import CircleAvatar from './circleAvatar';

describe('CircleAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CircleAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
