import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "icon-button",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./IconButton.component.html",
  styleUrls: ["./IconButton.component.css"],
})
export class IconButton {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() icon: string = "";
  /** Variant props */
  @Input() state: "Enabled" = "Enabled";
  @Input() style: "Standard" | "Outlined" = "Filled";
  /** Style props */
  @Input() trailingIconHeight: string | number = "";
  @Input() trailingIconAlignSelf: string | number = "";
  @Input() trailingIconWidth: string | number = "";

  get trailingIconStyle() {
    return {
      height: this.trailingIconHeight,
      "align-self": this.trailingIconAlignSelf,
      width: this.trailingIconWidth,
    };
  }
}
