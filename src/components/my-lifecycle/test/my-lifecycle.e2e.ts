import { newE2EPage } from '@stencil/core/testing';

describe('my-lifecycle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-lifecycle></my-lifecycle>');

    const element = await page.find('my-lifecycle');
    expect(element).toHaveClass('hydrated');
  });
});
