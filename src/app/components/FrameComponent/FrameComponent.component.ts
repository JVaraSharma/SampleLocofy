import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

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

  /** Value props */
  @Input() infosysFinacleLogo1: string = "";
}