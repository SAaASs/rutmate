import { render } from '@testing-library/react';

import DraggableContainer from './draggableContainer';

describe('DraggableContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DraggableContainer />);
    expect(baseElement).toBeTruthy();
  });
});
