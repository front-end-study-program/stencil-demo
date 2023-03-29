import { Component, Host, h, State } from '@stencil/core';
import { Gesture } from '@use-gesture/vanilla'
import { bound } from './utils'
import * as mat from './utils/matrix'
import type { Matrix } from './utils/matrix'

@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer {

  @State() matrix = '1, 0, 0, 1, 0, 0'

  maxZoom = 3

  controlEl: HTMLDivElement
  imgEl: HTMLImageElement

  boundMatrix(nextMatrix: Matrix, type: 'translate' | 'scale', last = false) {
    const controlSize = this.controlEl.getBoundingClientRect();
    const imgSize = this.imgEl.getBoundingClientRect();
    if (!controlSize || !imgSize) return nextMatrix

    const controlLeft = -controlSize.width / 2
    const controlTop = -controlSize.height / 2
    const imgLeft = -imgSize.width / 2
    const imgTop = -imgSize.height / 2

    const zoom = mat.getScaleX(nextMatrix)

    const scaledImgWidth = zoom * imgSize.width
    const scaledImgHeight = zoom * imgSize.height

    const [x, y] = mat.apply(nextMatrix, [imgLeft, imgTop])

    if (type === 'scale' && last) {
      const [boundedX, boundedY] = [
        scaledImgWidth > controlSize.width
          ? bound(
              x,
              controlLeft - (scaledImgWidth - controlSize.width),
              controlLeft
            )
          : -scaledImgWidth / 2,
        scaledImgHeight > controlSize.height
          ? bound(
              y,
              controlTop - (scaledImgHeight - controlSize.height),
              controlTop
            )
          : -scaledImgHeight / 2,
      ]
      return mat.translate(nextMatrix, boundedX - x, boundedY - y)
    }

    return nextMatrix
  }

  componentDidLoad() {
    const controlSize = this.controlEl.getBoundingClientRect();

    new Gesture(
      this.controlEl,
      {
        onDrag: state => {

        },
        onPinch: state => {
          console.log(state)
          const [d] = state.offset
          if (d < 0) return

          const nextZoom = state.last ? bound(d, 1, this.maxZoom) : d

          if (state.last && nextZoom <= 1) {
            this.matrix = '1, 0, 0, 1, 0, 0'
          } else {
            if (!controlSize) return

            const currentMatrix = this.matrix.split(',').map(item => +item) as unknown as Matrix
            const currentZoom = mat.getScaleX(currentMatrix)

            const originOffsetX = state.origin[0] - controlSize.width / 2
            const originOffsetY = state.origin[1] - controlSize.height / 2

            let nextMatrix = mat.translate(
              currentMatrix,
              -originOffsetX,
              -originOffsetY
            )
            nextMatrix = mat.scale(nextMatrix, nextZoom / currentZoom)
            nextMatrix = mat.translate(nextMatrix, originOffsetX, originOffsetY)

            this.matrix = this.boundMatrix(nextMatrix, 'scale', state.last).join(', ')
          }
        }
      }
    )
  }

  render() {
    return (
      <Host>
        <div class="mask">
          <div class="mask-content">
            <div class="image-content">
              <div class="image-slide">
                <div class="image-control" ref={(el) => this.controlEl = el}>
                  <div class="image-wrapper" style={{ transform: `matrix(${this.matrix})` }}>
                    <img ref={(el) => this.imgEl = el} src="https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80" draggable={false} alt="https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
