import { newSpecPage } from '@stencil/core/testing';
import { MyProperties } from '../my-properties';

describe('my-properties', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyProperties],
      html: `<my-properties></my-properties>`,
    });
    expect(page.root).toEqualHtml(`
      <my-properties>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-properties>
    `);
  });
});
