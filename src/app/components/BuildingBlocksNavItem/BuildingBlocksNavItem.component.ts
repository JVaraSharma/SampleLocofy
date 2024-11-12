import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "building-blocks-nav-item",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./BuildingBlocksNavItem.component.html",
  styleUrls: ["./BuildingBlocksNavItem.component.css"],
})
export class BuildingBlocksNavItem {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() badgeLabelText: string = "24";
  @Input() labelText: string = "Dashboard";
  @Input() showBadgeLabel: boolean = false;
  @Input() icon: string = "";
  /** Variant props */
  @Input() selected: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() state: "Enabled" = "Enabled";
  /** Style props */
  @Input() iconOverflow: string | number = "";

  get iconStyle() {
    return {
      overflow: this.iconOverflow,
    };
  }
}
