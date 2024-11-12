import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "building-blocksbutton-segment1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./BuildingBlocksbuttonSegment1.component.html",
  styleUrls: ["./BuildingBlocksbuttonSegment1.component.css"],
})
export class BuildingBlocksbuttonSegment1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() labelText: string = "Smart SIP";
  /** Variant props */
  @Input() configuration: "label only" = "label only";
  @Input() selected: boolean = true;
  @Input() state: "enabled" = "enabled";
}
