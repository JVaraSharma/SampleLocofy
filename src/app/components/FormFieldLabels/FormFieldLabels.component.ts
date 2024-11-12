import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "form-field-labels",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./FormFieldLabels.component.html",
  styleUrls: ["./FormFieldLabels.component.css"],
})
export class FormFieldLabels {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() planType: string = "";
}
