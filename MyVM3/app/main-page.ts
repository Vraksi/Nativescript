import { EventData, Frame, Label, NavigatedData, Observable, Page, PropertyChangeData, TextField } from '@nativescript/core'
import { MyData } from './MyData'
import { MyObservable } from './MyObservable'

var myData: MyData
var page: Page

export function navigatingTo(args: NavigatedData) {
  page = <Page>args.object

  if (!args.isBackNavigation) 
  {
    myData = new MyData()
  }
  else 
  {
    var txtFromSecond: Label = page.getViewById("txtFromSecond")
    txtFromSecond.text = myData.backward
  }


  var obs = new MyObservable()
  page.bindingContext = obs;

  obs.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => 
  {
    if(event.propertyName == "helper" && event.value == 1)
    {
      obs.toHere += " all work and no play makes jack a dull boy" 
      obs.helper = 0
    }
    console.log(event.propertyName);
    console.log(event.value);
  })
}

export function onGoSecond(args: EventData) {
  var txtWriteToSecond: TextField = <TextField>page.getViewById("txtWriteToSecond");
  var textToSecond: string = txtWriteToSecond.text;
  myData.forward = textToSecond;
  var navigationOptions =
  {
    moduleName: 'Second/second-page',
    context:
    {
      myData: myData,
      param1: "Hej"
    }
  }
  
  Frame.topmost().navigate(navigationOptions);
}
