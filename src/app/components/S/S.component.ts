import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { NavigationDrawer } from "../NavigationDrawer/NavigationDrawer.component";
import { FrameComponent } from "../FrameComponent/FrameComponent.component";
import { RadioButtons } from "../RadioButtons/RadioButtons.component";
import { Button } from "../Button/Button.component";
@Component({
  selector: "s-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NavigationDrawer, FrameComponent, RadioButtons, Button],
  templateUrl: "./S.component.html",
  styleUrls: ["./S.component.css"],
})
export class S {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
