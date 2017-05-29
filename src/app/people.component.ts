import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'people',
    template: `
        <ul>
            <li *ngFor="let person of people; trackBy: trackById"
                (click)="update$.next(person)">
                <person [value]="person"></person>
            </li>
        </ul>
    `
})

export class PeopleComponent {
    @Input() people: any[];
    @Output() update$ = new EventEmitter<any>();

    trackById(people) {
        return people.id;
    }
}