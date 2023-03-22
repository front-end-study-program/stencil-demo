import { Component, Host, h, FunctionalComponent } from '@stencil/core';


interface Props {
  name: string
}

const Hello: FunctionalComponent<Props> = ({ name }, children) => [
  <p>{ name }</p>,
  children
]

@Component({
  tag: 'my-function-component',
  styleUrl: 'my-function-component.css',
  shadow: true,
})
export class MyFunctionComponent {

  render() {
    return (
      <Host>
        <Hello name="hello">
          <span>slot</span>
        </Hello>
      </Host>
    );
  }

}
