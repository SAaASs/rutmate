import { render } from '@testing-library/react';

import ChatList from './chatList';

describe('ChatList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatList />);
    expect(baseElement).toBeTruthy();
  });
});
