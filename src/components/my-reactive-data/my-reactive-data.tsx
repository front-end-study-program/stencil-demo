import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'my-reactive-data',
  styleUrl: 'my-reactive-data.css',
  shadow: true,
})
export class MyReactiveData {
  @Prop() activated: boolean

  @State() busy: boolean;

  @Watch('activated')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    console.log('The old value of activated is: ', oldValue);
    console.log('The new value of activated is: ', newValue);
  }

  @Watch('busy')
  watchStateHandler(newValue: boolean, oldValue: boolean) {
    console.log('The old value of busy is: ', oldValue);
    console.log('The new value of busy is: ', newValue);
  }
  
  @Watch('activated')
  @Watch('busy')
  watchMultiple(newValue: boolean, oldValue: boolean, propName:string) {
    console.log(`The new value of ${propName} is: `, newValue, oldValue);
  }

  @State() randNumbers: number[] = [];

  // watch 只对数据的引用进行监听
  @Watch('randNumbers')
  watchRandNumbersHandler(newValue: number[], oldValue: number[]) {
    console.log('The old value of randNumbers is: ', oldValue);
    console.log('The new value of randNumbers is: ', newValue);
  }

  onClick() {    
    this.busy = !this.busy
    this.randNumbers = [...this.randNumbers, +this.busy]
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.onClick()}>购买</button>
      </Host>
    );
  }

}
