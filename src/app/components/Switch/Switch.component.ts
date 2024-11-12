import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "switch",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Switch.component.html",
  styleUrls: ["./Switch.component.css"],
})
export class Switch {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() icon: boolean = false;
  @Input() selected: boolean = true;
  @Input() state: "Enabled" = "Enabled";
}
