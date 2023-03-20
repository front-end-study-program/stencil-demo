import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'my-lifecycle',
  styleUrl: 'my-lifecycle.css',
  shadow: true,
})
export class MyLifecycle {
  timer: number;
  @State() time: number = Date.now();

  // 连接文档
  connectedCallback() {
    console.log('connectedCallback', '当 custom element 首次被插入文档 DOM 时，被调用');
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  // 组件开始加载
  componentWillLoad() {
    console.log('componentWillLoad', '当组件第一次连接到 dom 之后调用，只被调用一次，所以是异步加载数据，设置状态的好地方。可以返回一个 promise，用于等待第一个 render');
  }

  // 组件开始渲染
  componentWillRender() {
    console.log('componentWillRender', '在每次 render 之前调用');
  }

  // 组件渲染完成
  componentDidRender() {
    console.log('componentDidRender', '在每次 render 之后调用');
  }

  // 组件加载完成
  componentDidLoad() {
    console.log('componentDidLoad', '在组件完全加载和第一次 render 后调用');
  }

  /**
   * 组件 prop / state 更新之前调用
   * @param newVal 新值
   * @param oldVal 老值
   * @param propName 改变的属性名称
   * @returns boolean 是否应该重新渲染
   */
  componentShouldUpdate(newVal, oldVal, propName) {
    console.log(newVal, oldVal, propName, 'componentShouldUpdate');
    return true;
  }

  /**
   * 当组件因为某些Prop()或State()更改而即将更新时调用。
   * 在第一次 render 期间不调用
   * 可以返回一个 promise，它可以用来等待下一次渲染。
   */
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 在组件更新之后调用。在第一次 render 期间不调用
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 断开与文档的连接
  disconnectedCallback() {
    console.log('disconnectedCallback', '当 custom element 从文档 DOM 中删除时，被调用');
    window.clearInterval(this.timer);
  }

  render() {
    console.log('render');
    const time = new Date(this.time).toLocaleTimeString();
    return (
      <Host>
        <span>{time}</span>
      </Host>
    );
  }
}
