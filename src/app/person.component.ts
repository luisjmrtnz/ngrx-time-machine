import { Component, Input} from '@angular/core';

@Component({
    selector: 'person',
    template: `
        <div>
            <h2>{{ value.name }}</h2>
            <p>{{ value.time }}</p>
        </div>
    `
})

export class PersonComponent {
    @Input() value;
}