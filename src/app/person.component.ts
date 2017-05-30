import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'person',
    template: `
        <div>
            <h2>{{ value.name }}</h2>
            <p class="animated" [class.bounceIn]="hasChanged">{{ value.time }}</p>
        </div>
        <ul *ngIf="value.sons">
            <li *ngFor="let p of value.sons; trackBy: trackById">
                <person [value]="p"></person>
            </li>
        </ul>
    `,
    styles: [
        `   
            .animated {
                animation-duration: 0.6s
            }

            @keyframes bounceIn {
                0%,100%,20%,40%,60%,80% {
                    -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
                }

                0% {
                    opacity: 0;
                    -webkit-transform: scale3d(.3,.3,.3);
                    transform: scale3d(.3,.3,.3)
                }

                40% {
                    background-color: blue;
                    color:#fff;
                    -webkit-transform: scale3d(.6,.6,.6);
                    transform: scale3d(.6,.6,.6)
                }

                70% {
                    -webkit-transform: scale3d(1.1,1.1,1.1);
                    transform: scale3d(1.1,1.1,1.1)
                }

                100% {
                    opacity: 1;
                    -webkit-transform: scale3d(1,1,1);
                    transform: scale3d(1,1,1)
                }
            }

            .bounceIn {
                -webkit-animation-name: bounceIn;
                animation-name: bounceIn
            }
        `
    ]
})

export class PersonComponent implements OnChanges {
    @Input() value;
    hasChanged: boolean = false;

    trackById(person) {
        return person.id;
    }

    ngOnChanges(changes: SimpleChanges){
        for(let prop in changes){
            let chng = changes[prop];
            let curr = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);

            if(prev && (curr !== prev)){
                this.hasChanged = true;
                setTimeout(() => this.hasChanged = false, 600);
            }
        }
    }
}