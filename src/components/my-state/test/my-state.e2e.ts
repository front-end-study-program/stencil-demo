import { newE2EPage } from '@stencil/core/testing';

describe('my-state', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-state></my-state>');

    const element = await page.find('my-state');
    expect(element).toHaveClass('hydrated');
  });
});
