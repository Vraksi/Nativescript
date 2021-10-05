import { Button, EventData, Label, Page, TextField } from "@nativescript/core"; 
import { MyObservable } from "~/MyObservable";
import { MyData } from "../myData"; 

var myData: MyData; 
var page: Page; 
var numberFromMain: number;
var obs: MyObservable

export function navigatingTo(args: EventData) 
{ 
    console.log("DU ER NU PÅ GET NUMBER SIDEN");
    page = <Page>args.object; 
    myData = page.navigationContext.myData;

    var label: Label = page.getViewById("number");
    numberFromMain = myData.whichNumber
    if(numberFromMain == 1){
        label.text = "Type the first number"
    }
    else if(numberFromMain == 2)
    {
        label.text = "Type the Second number"
    }
} 
    

export function onGoMain() 
{ 
    var textField: TextField = page.getViewById("typedNumber");
    if(numberFromMain == 1){
        myData.tal1 = parseInt(textField.text)
    }else if(numberFromMain == 2){
        myData.tal2 = parseInt(textField.text)
    }
    
    page.frame.goBack(); 
}