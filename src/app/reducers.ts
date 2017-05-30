import { Action } from '@ngrx/store';
import { ClockActions } from './actions';

export function clockReducer(state = new Date(), action: Action) {
    switch(action.type){
        case ClockActions.SET_HOURS:
            let hours = new Date(state.getTime());
            hours.setHours(hours.getHours() + parseInt(action.payload));
            return hours;
        case ClockActions.SET_SECONDS:
            let seconds = new Date(state.getTime());
            seconds.setSeconds(seconds.getSeconds() + action.payload);
            return seconds;
        default:
            return state;
    }
};

const people = [
    { 
        id: 1,
        name: 'Maria',
        time: '',
        sons: [
            {
                id: 100,
                name: 'Miguel',
                time: ''
            },
            {
                id: 4,
                name: 'Jose',
                time: ''
            },
        ]
    },
    { 
        id: 2,
        name: 'Jose',
        time: '',
        sons: []
    },
    { 
        id: 3,
        name: 'Miguel',
        time: '',
        sons: []
    }
];

export function peopleReducer(state = people, action: Action){
    switch(action.type) {
        case ClockActions.UPDATE_TIME:
            const x = action.payload;

            const updated = state.map( person => {
             /*  if(person.sons.length > 0) {
                   return Object.assign({}, person , {
                        sons: [
                            {
                                id: 100,
                                name: 'Miguel',
                                time: new Date().toString()
                            },
                            {
                                id: 4,
                                name: 'Jose',
                                time: new Date().toString()
                            },
                        ]
                   });
                }else {
                    return person;
                } */

                return (person.id === x.id)? Object.assign({}, person, { time: new Date().toString() }): person;
            });

            return updated;
        default: 
            return state;
    }
}