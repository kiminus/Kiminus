# Angular Material Form Control

we can create custom form field controls inside `<mat-firn-field>`

each form should have the following properties:

```HTML
<div [formGroup] = "form-name">
    <mat-form-field>
        <mat-label>custom form label</mat-label>
        <mat-component formControlName="mc"></mat-component>
        <mat-icon matSuffix>icon-name</mat-icon>
        <mat-hint>hint</mat-hint>
    </mat-form-field>
</div>
```
