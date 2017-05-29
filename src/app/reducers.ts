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
        time: ''
    },
    { 
        id: 2,
        name: 'Jose',
        time: ''
    },
    { 
        id: 3,
        name: 'Miguel',
        time: ''
    }
];

export function peopleReducer(state = people, action: Action){
    switch(action.type) {
        case ClockActions.UPDATE_TIME:
            let id = action.payload.id;
            return state.map( person => {
                return (person.id === id)? Object.assign({}, person, {time: new Date().toString()}) : person;
            });
        default: 
            return state;
    }
}