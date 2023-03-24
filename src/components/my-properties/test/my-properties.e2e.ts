import { newE2EPage } from '@stencil/core/testing';

describe('my-properties', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-properties></my-properties>');

    const element = await page.find('my-properties');
    expect(element).toHaveClass('hydrated');
  });
});
