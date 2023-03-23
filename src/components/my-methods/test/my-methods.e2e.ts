import { newE2EPage } from '@stencil/core/testing';

describe('my-methods', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-methods></my-methods>');

    const element = await page.find('my-methods');
    expect(element).toHaveClass('hydrated');
  });
});
