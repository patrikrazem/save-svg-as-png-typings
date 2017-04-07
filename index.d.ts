// Type definitions for save-svg-as-png
// Project repository: https://github.com/exupero/saveSvgAsPng
export = saveSvgAsPng;

declare namespace saveSvgAsPng {
    type SourceElement = HTMLElement | SVGElement;

    type BackgroundStyle = string | CanvasGradient | CanvasPattern;

    interface SelectorRemap {
    (text: string): string;
    }

    interface SaveSVGOptions {
    scale?: number;
    responsive?: boolean;
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    selectorRemap?: SelectorRemap;
    backgroundColor?: BackgroundStyle;
    }

    interface UriCallback {
    (uri: string): void;
    }

    function svgAsDataUri(el: SourceElement, options: SaveSVGOptions, cb: UriCallback): void;

    function svgAsPngUri(el: SourceElement, options: SaveSVGOptions, cb: UriCallback): void;

    function saveSvg(el: SourceElement, fileName: string, options?: SaveSVGOptions): void;

    function saveSvgAsPng(el: SourceElement, fileName: string, options?: SaveSVGOptions): void;
}
