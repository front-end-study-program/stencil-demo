import { newSpecPage } from '@stencil/core/testing';
import { MyEvents } from '../my-events';

describe('my-events', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyEvents],
      html: `<my-events></my-events>`,
    });
    expect(page.root).toEqualHtml(`
      <my-events>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-events>
    `);
  });
});
