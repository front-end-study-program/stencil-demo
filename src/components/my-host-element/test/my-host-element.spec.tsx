import { newSpecPage } from '@stencil/core/testing';
import { MyHostElement } from '../my-host-element';

describe('my-host-element', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHostElement],
      html: `<my-host-element></my-host-element>`,
    });
    expect(page.root).toEqualHtml(`
      <my-host-element>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-host-element>
    `);
  });
});
