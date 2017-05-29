import { Component, Input } from '@angular/core';

@Component({
    selector: 'clock',
    template: `
        <h1>{{ date }}</h1>
    `
})

export class ClockComponent {
    @Input() date: Date;
}