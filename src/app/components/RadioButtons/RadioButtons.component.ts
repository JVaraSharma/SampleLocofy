import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "radio-buttons",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./RadioButtons.component.html",
  styleUrls: ["./RadioButtons.component.css"],
})
export class RadioButtons {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() icon: string = "";
  /** Variant props */
  @Input() selected: boolean = true;
  @Input() state: "Enabled" = "Enabled";
}
