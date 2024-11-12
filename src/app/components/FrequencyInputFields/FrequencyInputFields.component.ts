import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { TextField } from "../TextField/TextField.component";
@Component({
  selector: "frequency-input-fields",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, TextField],
  templateUrl: "./FrequencyInputFields.component.html",
  styleUrls: ["./FrequencyInputFields.component.css"],
})
export class FrequencyInputFields {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() frequency: string = "";
  /** Style props */
  @Input() frequencyInputFieldsLeft: string | number = "";

  get frequencyInputFieldsStyle() {
    return {
      left: this.frequencyInputFieldsLeft,
    };
  }
}
