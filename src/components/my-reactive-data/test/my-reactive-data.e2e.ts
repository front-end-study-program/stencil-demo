import { newE2EPage } from '@stencil/core/testing';

describe('my-reactive-data', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-reactive-data></my-reactive-data>');

    const element = await page.find('my-reactive-data');
    expect(element).toHaveClass('hydrated');
  });
});
