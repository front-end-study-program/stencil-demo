import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'my-host-element',
  styleUrl: 'my-host-element.css',
  shadow: true,
})
export class MyHostElement {
  @Prop() open = false;

  @State() height = 0;

  @Element() el!: HTMLElement

  getHeight() {
    this.height = this.el.getBoundingClientRect().height
  }

  componentDidRender() {
    this.getHeight()
  }

  render() {
    return (
      <Host
        aria-hidden={this.open ? 'false': 'hide'}
        class={{
          'is-open': this.open
        }}
      >
        <slot></slot>
        <p>{ this.height }</p>
      </Host>
    );
  }

}
