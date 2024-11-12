import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "building-blocksbutton-segment",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./BuildingBlocksbuttonSegment.component.html",
  styleUrls: ["./BuildingBlocksbuttonSegment.component.css"],
})
export class BuildingBlocksbuttonSegment {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() labelText: string = "Fund";
  /** Variant props */
  @Input() configuration: "label only" = "label only";
  @Input() selected: boolean = true;
  @Input() state: "enabled" = "enabled";
}
