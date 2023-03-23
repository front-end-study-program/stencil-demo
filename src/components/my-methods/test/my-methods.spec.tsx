import { newSpecPage } from '@stencil/core/testing';
import { MyMethods } from '../my-methods';

describe('my-methods', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyMethods],
      html: `<my-methods></my-methods>`,
    });
    expect(page.root).toEqualHtml(`
      <my-methods>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-methods>
    `);
  });
});
