import { Component, Host, h, Prop, Watch } from '@stencil/core';

// 公开的自定义属性
@Component({
  tag: 'my-properties',
  styleUrl: 'my-properties.css',
  shadow: true,
})
export class MyProperties {
  @Prop({
    // 外部传递的属性名
    attribute: 'name',
    // 组件内部是否可以修改
    mutable: true,
    // 是否在 dom 中反射
    reflect: true
  }) name!: string // 必传属性

  @Prop({ reflect: false }) isDone = true // 默认参数

  // 属性验证
  @Watch('isDone')
  validateName(newValue: boolean, _oldValue: boolean) {
    const isBlank = typeof newValue !== 'boolean';
    if (isBlank) { 
      throw new Error('thingToDo is a required property and cannot be empty') 
    };
  }

  render() {
    return (
      <Host>
        <div>hello {this.name}</div>
        <div>boolean: {this.isDone ? '1' : '2'}</div>
      </Host>
    );
  }

}
