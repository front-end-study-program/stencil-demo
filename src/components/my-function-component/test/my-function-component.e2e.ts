import { newE2EPage } from '@stencil/core/testing';

describe('my-function-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-function-component></my-function-component>');

    const element = await page.find('my-function-component');
    expect(element).toHaveClass('hydrated');
  });
});
