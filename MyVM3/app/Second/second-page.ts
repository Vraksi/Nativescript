import { EventData, Label, Page, TextField } from "@nativescript/core"; 
import { MyData } from "../MyData"; 

var myData: MyData; 
var page: Page; 

export function onNavigatingTo(args: EventData) 
{ 
    page = <Page>args.object; 
    myData = page.navigationContext.myData; 
    var strFromMain = myData.forward; 
    var lbl: Label = page.getViewById("txtFromMain"); 
    lbl.text = strFromMain; 
} 
    

export function onGoMain(args: EventData) 
{ 
    var txtSendBack: TextField = page.getViewById("txtWriteToMain"); 
    myData.backward = txtSendBack.text; 
    page.frame.goBack(); 
}