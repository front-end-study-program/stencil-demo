import { newE2EPage } from '@stencil/core/testing';

describe('my-events', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-events></my-events>');

    const element = await page.find('my-events');
    expect(element).toHaveClass('hydrated');
  });
});
