import { render } from '@testing-library/react';

import WebToolkit from './web-toolkit';

describe('WebToolkit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebToolkit />);
    expect(baseElement).toBeTruthy();
  });
});
