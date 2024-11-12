import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { IconButton } from "../IconButton/IconButton.component";
@Component({
  selector: "text-field",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, IconButton],
  templateUrl: "./TextField.component.html",
  styleUrls: ["./TextField.component.css"],
})
export class TextField {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() supportingText: string = "Supporting text";
  @Input() showSupportingText: boolean = false;
  @Input() placeholder: string = "";
  /** Variant props */
  @Input() leadingIcon: boolean = false;
  @Input() state: "Enabled" = "Enabled";
  @Input() style: "Outlined" = "Filled";
  @Input() textConfigurations: "Label text" = "Input text";
  @Input() trailingIcon: boolean = true;
  /** Style props */
  @Input() textFieldHeight: string | number = "";
  @Input() textFieldWidth: string | number = "";
  @Input() textFieldBackgroundColor: string | number = "";
  @Input() textFieldAlignSelf: string | number = "";
  @Input() stateLayerHeight: string | number = "";
  @Input() stateLayerFlex: string | number = "";
  @Input() contentWidth: string | number = "";
  @Input() contentBorder: string | number = "";
  @Input() contentOutline: string | number = "";
  @Input() contentBackgroundColor: string | number = "";
  @Input() contentFontFamily: string | number = "";
  @Input() contentFontSize: string | number = "";
  @Input() contentColor: string | number = "";
  @Input() contentHeight: string | number = "";

  get textFieldStyle() {
    return {
      height: this.textFieldHeight,
      width: this.textFieldWidth,
      "background-color": this.textFieldBackgroundColor,
      "align-self": this.textFieldAlignSelf,
    };
  }

  get stateLayerStyle() {
    return {
      height: this.stateLayerHeight,
      flex: this.stateLayerFlex,
    };
  }

  get contentStyle() {
    return {
      width: this.contentWidth,
      border: this.contentBorder,
      outline: this.contentOutline,
      "background-color": this.contentBackgroundColor,
      "font-family": this.contentFontFamily,
      "font-size": this.contentFontSize,
      color: this.contentColor,
      height: this.contentHeight,
    };
  }
}
