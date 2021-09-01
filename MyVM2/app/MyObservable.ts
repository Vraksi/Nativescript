import { Observable } from "@nativescript/core";

export class MyObservable extends Observable
{
    private _fromHere: string;
    private _toHere: string;

    private _helper : number;


    
    //Når du laver en databinding som {{fromHere}} Kalder jeg Getter funktionen lavet i programmet. 
    constructor()
    {
        super();
        //this._fromHere = "write here"
        this._toHere = "here it comes"
        this.helper = 0
    }

    public get helper() : number {
        return this._helper;
    }

    public set helper(value : number) {
        this._helper = value;
        this.notifyPropertyChange("toHere", value)
    }
    
    public onHelper()
    {
        this.helper = 1
    }


    set fromHere(value: string){
        this._fromHere = value
    }

    get fromHere(): string{
        return this._fromHere
    }

    set toHere(value: string){
        this._toHere = value
        this.notifyPropertyChange("toHere", value)
    }
    
    get toHere(): string{
        return this._toHere
    }

    onTap(){
        //this.toHere kalder getter funktionen
        this.toHere = this._fromHere
    }

}