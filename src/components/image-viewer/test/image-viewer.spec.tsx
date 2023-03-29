import { newSpecPage } from '@stencil/core/testing';
import { ImageViewer } from '../image-viewer';

describe('image-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImageViewer],
      html: `<image-viewer></image-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <image-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </image-viewer>
    `);
  });
});
