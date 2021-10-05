export class MyData{
    
    constructor(){
        this.tal1 = 4
        this.tal2 = 49
    }

    private _tal1 : number;

    public get tal1() : number 
    {
        return this._tal1;
    }
    public set tal1(value : number)
    {
        this._tal1 = value;
    }

    private _tal2 : number;

    public get tal2() : number {
        return this._tal2;
    }
    public set tal2(value : number) {
        this._tal2 = value;
    }
    
    private _whichNumber : number;
    public get whichNumber() : number {
        return this._whichNumber;
    }
    public set whichNumber(v : number) {
        this._whichNumber = v;
    }
    
}