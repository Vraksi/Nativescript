export class MyData{
    private _forward : string;
    private _backward : string;
    
    public get forward() : string {
        return this._forward;
    }
    public set forward(v : string) {
        this._forward = v;
    }
    
    public get backward() : string {
        return this._backward;
    }
    public set backward(v : string) {
        this._backward = v;
    }
    
}