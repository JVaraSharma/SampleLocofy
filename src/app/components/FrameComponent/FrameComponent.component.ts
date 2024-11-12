import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { TextField } from "../TextField/TextField.component";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TextField],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
