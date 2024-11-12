import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { BuildingBlocksNavItem } from "../BuildingBlocksNavItem/BuildingBlocksNavItem.component";
@Component({
  selector: "navigation-drawer",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, BuildingBlocksNavItem],
  templateUrl: "./NavigationDrawer.component.html",
  styleUrls: ["./NavigationDrawer.component.css"],
})
export class NavigationDrawer {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Style props */
  @Input() navigationDrawerHeight: string | number = "";

  get navigationDrawerStyle() {
    return {
      height: this.navigationDrawerHeight,
    };
  }
}