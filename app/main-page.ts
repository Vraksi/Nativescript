import { Button, EventData, Label, Page, TextField } from '@nativescript/core'

var page: Page
var button: Button

export function navigatingTo(args: EventData) {
  page = <Page>args.object
  
}

export function onTap(args: EventData){
  let btnTryk = <Button>page.getViewById('btnTryk1');  
  let btnTryk2 = <Button>page.getViewById('btnTryk2');  
  let btnTryk3 = <Button>page.getViewById('btnTryk3');  

  var label: Label = page.getViewById("txtShow")
  var textField: TextField = page.getViewById("txtWrite")

  let onTap = (args:EventData) => {
    button = <Button>args.object
    console.log(button.id)
    switch(button.id){
      case "btnTryk1": 
        label.text = `number 1`
        break
      case "btnTryk2":
        label.text = `number 2`
        break
      case "btnTryk3":
        label.text = `number 3`
        break
    }
  }
  btnTryk.on('tap', onTap)
  btnTryk2.on('tap', onTap)
  btnTryk3.on('tap', onTap)
}

export function onExTap(args: EventData){
  var label: Label = page.getViewById("txtShow")
  var textField: TextField = page.getViewById("txtWrite")
  var btn = <Button>args.object
  switch(btn.id)
  {
    case "btnTryk1":
      label.text = textField.text
      break
    case "btnTryk2":
      label.text = textField.text
      break
    case "btnTryk3":
      label.text = textField.text
      break
  }
  
}

