<div
  class="root"
  [attr.data-selected]="selected"
  [attr.data-showIcon]="showIcon"
  [attr.data-state]="state"
>
  <div class="state-layer12">
    <img
      class="icon"
      loading="lazy"
      alt=""
      [src]="icon"
      [ngStyle]="iconStyle"
    />
    <a class="label">{{labelText}}</a>
    <div class="badge-label-text" *ngIf="showBadgeLabel">
      {{badgeLabelText}}
    </div>
  </div>
</div>