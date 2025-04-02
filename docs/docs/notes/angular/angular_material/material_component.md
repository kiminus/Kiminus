# :simple-angular: Angular Material

## Topics

1. [Custom Form Control](./form_control.md)

### installation

`ng add @angular/material` `ng add @angular/mat

### run

`ng serve`

### display/use a prebuilt component

for example, if we want to use the mat slider, add following:

=== HTML

    ```html
    <mat-slider>
    <input matSliderThumb>
    </mat-slider>
    ```

=== TS

    ```ts
    import {Component} from '@angular/core';
    import {MatSliderModule} from '@angular/material/slider';

    /**
     * @title Basic slider
     */
    @Component({
    selector: 'slider-overview-example',
    templateUrl: 'slider-overview-example.html',
    styleUrl: 'slider-overview-example.css',
    imports: [MatSliderModule],
    })
    export class SliderOverviewExample {}
    ```
