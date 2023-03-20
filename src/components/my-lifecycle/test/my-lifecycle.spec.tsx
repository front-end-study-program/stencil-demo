import { newSpecPage } from '@stencil/core/testing';
import { MyLifecycle } from '../my-lifecycle';

describe('my-lifecycle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyLifecycle],
      html: `<my-lifecycle></my-lifecycle>`,
    });
    expect(page.root).toEqualHtml(`
      <my-lifecycle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-lifecycle>
    `);
  });
});
