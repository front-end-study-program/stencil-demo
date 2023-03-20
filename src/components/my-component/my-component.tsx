import { Component, Host, h, getAssetPath } from '@stencil/core';

// @Component 声明 web 组件
@Component({
  // 声明在 html 中使用的唯一标签名。使用 - 来连接命名
  tag: 'my-component',
  // 声明组件的静态资源相对路径，通过 getAssetPath 获取
  assetsDirs: ['assets'],
  // 是否启用 scoped css，设置 shadow 为true，则不能设置为 true
  scoped: false,
  // 是否启用 shadow-dom， attachShadow mode: open | closed
  shadow: true,
  // 焦点委托
  // shadow: {
  //   delegatesFocus: true
  // }
  // 指向外部的相对路径样式表，可添加 plugin 支持 css 预处理器
  styleUrl: 'my-component.css',
  // 添加多份样式表
  styleUrls: [],
  // 内联 css 样式
  styles: ''
})
export class MyComponent {
  image = 'mountain.jpg'

  render() {
    const imageSrc = getAssetPath(`./assets/${this.image}`);
    return (
      <Host>
        <img src={imageSrc} alt="img" />
      </Host>
    );
  }

}
