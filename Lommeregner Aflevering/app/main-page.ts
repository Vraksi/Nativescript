import { Button, EventData, Frame, Label, NavigatedData, Observable, Page, PropertyChangeData, TextField } from '@nativescript/core'
import { MyData } from './myData';
import { MyObservable } from './MyObservable';

var page: Page
var myData: MyData
var obs: MyObservable

export function navigatingTo(args: NavigatedData) {
  page = <Page>args.object
  obs = new MyObservable()
  page.bindingContext = obs

  if(!args.isBackNavigation)
  {
    console.log("DU OPRETTER EN NY MYDATA")
    myData = new MyData()
    obs.number1 = myData.tal1
    obs.number2 = myData.tal2
  }
  else
  {
    obs.number1 = myData.tal1
    obs.number2 = myData.tal2
    console.log(`Du kommer tilbage med tal ${myData.tal1} og ${myData.tal2}`)
  }

  obs.on(Observable.propertyChangeEvent, () => {
    console.log(obs.WhichNumber)
    if(obs.WhichNumber == 1)  {
      GetNumber(1);
    }
    else if (obs.WhichNumber == 2){
      GetNumber(2);
    }
  })
}

export function Calculate(args: EventData){
  var button = <Button>args.object
  page = <Page>args.object
  console.log(button.id)
  
  switch(button.id)
  {
    case"+":
      obs.PlusNumber()
      break;
    case"-":
      obs.MinusNumber()
      break;
    case"*":
      obs.TimesNumber()  
      break;
    case"/":
      obs.DivideNumber()
      break;
  }
}

export function GetNumber(number: number) {
  myData.whichNumber = number;
  var navigationOptions =
  {
    moduleName: 'NumberGetter/getnumber',
    context:
    {
      myData: myData,
    }
  }
  
  Frame.topmost().navigate(navigationOptions);
}
