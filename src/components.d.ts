/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ImageViewer {
    }
    interface MyComponent {
    }
    interface MyEvents {
    }
    interface MyFunctionComponent {
    }
    interface MyHostElement {
        "open": boolean;
    }
    interface MyLifecycle {
    }
    interface MyMethods {
        "changeOpen": () => Promise<void>;
    }
    interface MyProperties {
        "isDone": boolean;
        "name": string;
    }
    interface MyReactiveData {
        "activated": boolean;
    }
    interface MyState {
    }
}
export interface MyEventsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyEventsElement;
}
declare global {
    interface HTMLImageViewerElement extends Components.ImageViewer, HTMLStencilElement {
    }
    var HTMLImageViewerElement: {
        prototype: HTMLImageViewerElement;
        new (): HTMLImageViewerElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyEventsElement extends Components.MyEvents, HTMLStencilElement {
    }
    var HTMLMyEventsElement: {
        prototype: HTMLMyEventsElement;
        new (): HTMLMyEventsElement;
    };
    interface HTMLMyFunctionComponentElement extends Components.MyFunctionComponent, HTMLStencilElement {
    }
    var HTMLMyFunctionComponentElement: {
        prototype: HTMLMyFunctionComponentElement;
        new (): HTMLMyFunctionComponentElement;
    };
    interface HTMLMyHostElementElement extends Components.MyHostElement, HTMLStencilElement {
    }
    var HTMLMyHostElementElement: {
        prototype: HTMLMyHostElementElement;
        new (): HTMLMyHostElementElement;
    };
    interface HTMLMyLifecycleElement extends Components.MyLifecycle, HTMLStencilElement {
    }
    var HTMLMyLifecycleElement: {
        prototype: HTMLMyLifecycleElement;
        new (): HTMLMyLifecycleElement;
    };
    interface HTMLMyMethodsElement extends Components.MyMethods, HTMLStencilElement {
    }
    var HTMLMyMethodsElement: {
        prototype: HTMLMyMethodsElement;
        new (): HTMLMyMethodsElement;
    };
    interface HTMLMyPropertiesElement extends Components.MyProperties, HTMLStencilElement {
    }
    var HTMLMyPropertiesElement: {
        prototype: HTMLMyPropertiesElement;
        new (): HTMLMyPropertiesElement;
    };
    interface HTMLMyReactiveDataElement extends Components.MyReactiveData, HTMLStencilElement {
    }
    var HTMLMyReactiveDataElement: {
        prototype: HTMLMyReactiveDataElement;
        new (): HTMLMyReactiveDataElement;
    };
    interface HTMLMyStateElement extends Components.MyState, HTMLStencilElement {
    }
    var HTMLMyStateElement: {
        prototype: HTMLMyStateElement;
        new (): HTMLMyStateElement;
    };
    interface HTMLElementTagNameMap {
        "image-viewer": HTMLImageViewerElement;
        "my-component": HTMLMyComponentElement;
        "my-events": HTMLMyEventsElement;
        "my-function-component": HTMLMyFunctionComponentElement;
        "my-host-element": HTMLMyHostElementElement;
        "my-lifecycle": HTMLMyLifecycleElement;
        "my-methods": HTMLMyMethodsElement;
        "my-properties": HTMLMyPropertiesElement;
        "my-reactive-data": HTMLMyReactiveDataElement;
        "my-state": HTMLMyStateElement;
    }
}
declare namespace LocalJSX {
    interface ImageViewer {
    }
    interface MyComponent {
    }
    interface MyEvents {
        "onChangeCompleted"?: (event: MyEventsCustomEvent<boolean>) => void;
    }
    interface MyFunctionComponent {
    }
    interface MyHostElement {
        "open"?: boolean;
    }
    interface MyLifecycle {
    }
    interface MyMethods {
    }
    interface MyProperties {
        "isDone"?: boolean;
        "name": string;
    }
    interface MyReactiveData {
        "activated"?: boolean;
    }
    interface MyState {
    }
    interface IntrinsicElements {
        "image-viewer": ImageViewer;
        "my-component": MyComponent;
        "my-events": MyEvents;
        "my-function-component": MyFunctionComponent;
        "my-host-element": MyHostElement;
        "my-lifecycle": MyLifecycle;
        "my-methods": MyMethods;
        "my-properties": MyProperties;
        "my-reactive-data": MyReactiveData;
        "my-state": MyState;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "image-viewer": LocalJSX.ImageViewer & JSXBase.HTMLAttributes<HTMLImageViewerElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-events": LocalJSX.MyEvents & JSXBase.HTMLAttributes<HTMLMyEventsElement>;
            "my-function-component": LocalJSX.MyFunctionComponent & JSXBase.HTMLAttributes<HTMLMyFunctionComponentElement>;
            "my-host-element": LocalJSX.MyHostElement & JSXBase.HTMLAttributes<HTMLMyHostElementElement>;
            "my-lifecycle": LocalJSX.MyLifecycle & JSXBase.HTMLAttributes<HTMLMyLifecycleElement>;
            "my-methods": LocalJSX.MyMethods & JSXBase.HTMLAttributes<HTMLMyMethodsElement>;
            "my-properties": LocalJSX.MyProperties & JSXBase.HTMLAttributes<HTMLMyPropertiesElement>;
            "my-reactive-data": LocalJSX.MyReactiveData & JSXBase.HTMLAttributes<HTMLMyReactiveDataElement>;
            "my-state": LocalJSX.MyState & JSXBase.HTMLAttributes<HTMLMyStateElement>;
        }
    }
}
