import { Component, Host, h, Method, State } from '@stencil/core';

@Component({
  tag: 'my-methods',
  styleUrl: 'my-methods.css',
  shadow: true,
})
export class MyMethods {
  @State() isOpen = false;

  // 向外部公开方法，必须是 promise 函数 
  @Method()
  async changeOpen() {
    this.isOpen = !this.isOpen
    console.log(this.isOpen, '123')
  }

  render() {
    return (
      <Host
        class={{
          open: this.isOpen
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
