import { newSpecPage } from '@stencil/core/testing';
import { MyReactiveData } from '../my-reactive-data';

describe('my-reactive-data', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyReactiveData],
      html: `<my-reactive-data></my-reactive-data>`,
    });
    expect(page.root).toEqualHtml(`
      <my-reactive-data>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-reactive-data>
    `);
  });
});
