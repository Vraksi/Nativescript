import { Observable } from "@nativescript/core";

export class MyObservable extends Observable {
    private _whichNumber: number;

    constructor() {
        super();
        this.WhichNumber = 0
        this.number1 = 5
        this.number2 = 14
        this.result = 0
    }

    
    private _number1 : number;

    public get number1() : number {
        return this._number1;
    }
    public set number1(v : number) {
        this._number1 = v;
        this.notifyPropertyChange("number1", this._number1)
    }
    
    
    private _number2 : number;

    public get number2() : number {
        return this._number2;
    }
    public set number2(v : number) {
        this._number2 = v;
        this.notifyPropertyChange("number2", this._number2)
    }
    
    private _result : number;

    public get result() : number {
        return this._result;
    }
    public set result(v : number) {
        this._result = v;
    }
    

    public get WhichNumber(): number {
        return this._whichNumber;
    }

    public set WhichNumber(value: number) {
        this._whichNumber = value;
        this.notifyPropertyChange("number", value)
    }

    public PlusNumber(){
        this.result = this.number1 + this.number2 
        this.notifyPropertyChange("result", this.result)
    }

    
    public MinusNumber(){
        this.result = this.number1 - this.number2 
        this.notifyPropertyChange("result", this.result)
    }
    
    public TimesNumber(){
        this.result = this.number1 * this.number2 
        this.notifyPropertyChange("result", this.result)
    }
    
    public DivideNumber(){
        this.result = this.number1 / this.number2 
        this.notifyPropertyChange("result", this.result)
    }
    public Number1() {
        this.WhichNumber = 1
    }

    public Number2() {
        this.WhichNumber = 2
    }
}