import { render } from '@testing-library/react';

import ProtectedRouteElement from './protectedRouteElement';

describe('ProtectedRouteElement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProtectedRouteElement />);
    expect(baseElement).toBeTruthy();
  });
});
