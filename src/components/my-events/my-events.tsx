import { Component, Host, h, Event, EventEmitter, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-events',
  styleUrl: 'my-events.css',
  shadow: true,
})
export class MyEvents {
  @State() isCompleted = false

  // 自定义 DOM 事件
  @Event({
    // 事件名称
    eventName: 'changeCompleted',
    // 是否冒泡
    bubbles: true,
    // 是否可以取消事件
    cancelable: true,
    // 是否可以越过 shadow-dom 与常规 dom 的边界
    composed: true
  }) changeCompleted: EventEmitter<boolean>

  onClick() {
    this.isCompleted = !this.isCompleted
    this.changeCompleted.emit(this.isCompleted)
  }

  // 监听 dom 事件包括 @Event 分发的自定义事件
  @Listen('click', {
    // 监听从 window 触发的点击事件
    target: 'window',
    // 是否启用被动事件，来增加性能
    passive: true,
    // 是否捕获
    capture: true,
  })
  handleWindowClick() {
    console.log('window Click');
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.onClick()}>改变状态</button>
      </Host>
    );
  }

}
