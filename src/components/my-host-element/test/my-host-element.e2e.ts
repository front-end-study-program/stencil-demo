import { newE2EPage } from '@stencil/core/testing';

describe('my-host-element', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-host-element></my-host-element>');

    const element = await page.find('my-host-element');
    expect(element).toHaveClass('hydrated');
  });
});
