import { newSpecPage } from '@stencil/core/testing';
import { MyFunctionComponent } from '../my-function-component';

describe('my-function-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFunctionComponent],
      html: `<my-function-component></my-function-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-function-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-function-component>
    `);
  });
});
