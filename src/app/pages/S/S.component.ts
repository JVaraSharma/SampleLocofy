import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { NavigationDrawer } from "../../components/NavigationDrawer/NavigationDrawer.component";
import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { SegmentedButton } from "../../components/SegmentedButton/SegmentedButton.component";
import { FormFieldLabels } from "../../components/FormFieldLabels/FormFieldLabels.component";
import { Button } from "../../components/Button/Button.component";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons.component";
import { IconButton } from "../../components/IconButton/IconButton.component";
import { TextField } from "../../components/TextField/TextField.component";
import { FrequencyInputFields } from "../../components/FrequencyInputFields/FrequencyInputFields.component";
import { Switch } from "../../components/Switch/Switch.component";
@Component({
  selector: "s-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NavigationDrawer,
    FrameComponent,
    SegmentedButton,
    FormFieldLabels,
    Button,
    RadioButtons,
    IconButton,
    TextField,
    FrequencyInputFields,
    Switch,
  ],
  templateUrl: "./S.component.html",
  styleUrls: ["./S.component.css"],
})
export class S {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
