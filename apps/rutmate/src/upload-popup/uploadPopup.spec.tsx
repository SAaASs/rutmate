import { render } from '@testing-library/react';

import UploadPopup from './uploadPopup';

describe('UploadPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadPopup />);
    expect(baseElement).toBeTruthy();
  });
});
