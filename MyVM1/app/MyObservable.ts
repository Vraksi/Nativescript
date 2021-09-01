import { Observable } from "@nativescript/core";

export class MyObservable extends Observable
{
    private _fromHere: string;
    private _toHere: string;

    constructor()
    {
        super();
        this._fromHere = "write here"
        this._toHere = "here it comes"
    }

    set fromHere(value: string){
        this.fromHere = value
    }

    get fromHere(): string{
        return this._fromHere
    }

    set toHere(value: string){
        this._toHere = value
    }
    
    get toHere(): string{
        return this._toHere
    }

    onTap(){
        this.toHere = this.fromHere
    }

}