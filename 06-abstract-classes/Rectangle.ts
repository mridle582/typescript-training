import { Shape } from "./Shape";

export class Rectangle extends Shape {

    calculateArea(): number {
        return this._length * this._width
    }

    constructor(theX: number, theY: number, 
                private _width: number, private _length: number) {
       super(theX, theY);
    }

    get width(): number {
        return this._width;
    }

    get length(): number {
        return this._length;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }

}