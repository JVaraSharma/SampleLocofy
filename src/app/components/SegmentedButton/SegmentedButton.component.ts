import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { BuildingBlocksbuttonSegment } from "../BuildingBlocksbuttonSegment/BuildingBlocksbuttonSegment.component";
import { BuildingBlocksbuttonSegment1 } from "../BuildingBlocksbuttonSegment1/BuildingBlocksbuttonSegment1.component";
@Component({
  selector: "segmented-button",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BuildingBlocksbuttonSegment, BuildingBlocksbuttonSegment1],
  templateUrl: "./SegmentedButton.component.html",
  styleUrls: ["./SegmentedButton.component.css"],
})
export class SegmentedButton {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() density: 0 = 0;
  @Input() segments: 2 = 2;
}
