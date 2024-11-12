import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "button-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Button.component.html",
  styleUrls: ["./Button.component.css"],
})
export class Button {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() labelText: string = "Add";
  /** Variant props */
  @Input() showIcon: boolean = false;
  @Input() state: "Enabled" = "Enabled";
  @Input() style: "Filled" | "Outlined" = "Filled";
  /** Style props */
  @Input() buttonWidth: string | number = "";

  get buttonStyle() {
    return {
      width: this.buttonWidth,
    };
  }
}
