import { newE2EPage } from '@stencil/core/testing';

describe('image-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<image-viewer></image-viewer>');

    const element = await page.find('image-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
