import { render } from '@testing-library/react';

import QuestionPage from './questionPage';

describe('QuestionPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionPage />);
    expect(baseElement).toBeTruthy();
  });
});
