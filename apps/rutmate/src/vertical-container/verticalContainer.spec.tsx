import { render } from '@testing-library/react';

import VerticalContainer from './verticalContainer';

describe('VerticalContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VerticalContainer />);
    expect(baseElement).toBeTruthy();
  });
});
