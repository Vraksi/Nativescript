
import { Button, EventData, Observable, Page } from '@nativescript/core'

// Event handler for Page 'navigatingTo' event attached in main-page.xml
export function navigatingTo(args: EventData) {  
  const page = <Page>args.object
  var obs: Observable = new Observable();
  page.bindingContext = obs;

  obs.set("onTap", (args: EventData)=> {
    var btnTap: Button = <Button>args.object
    var from: string = obs.get("fromHere")
    obs.set("toHere", from)
  })
}
