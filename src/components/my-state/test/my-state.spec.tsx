import { newSpecPage } from '@stencil/core/testing';
import { MyState } from '../my-state';

describe('my-state', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyState],
      html: `<my-state></my-state>`,
    });
    expect(page.root).toEqualHtml(`
      <my-state>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-state>
    `);
  });
});
