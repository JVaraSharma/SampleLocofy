import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BuildingBlocksNavItem } from "../BuildingBlocksNavItem/BuildingBlocksNavItem.component";
@Component({
  selector: "navigation-drawer",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BuildingBlocksNavItem],
  templateUrl: "./NavigationDrawer.component.html",
  styleUrls: ["./NavigationDrawer.component.css"],
})
export class NavigationDrawer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
