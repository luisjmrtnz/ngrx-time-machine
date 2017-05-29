import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()

export class ClockActions {
    static SET_SECONDS = '[Clock] SET SECONDS';
    setSeconds(seconds: number): Action {
        return {
            type: ClockActions.SET_SECONDS,
            payload: seconds
        }
    }

    static SET_HOURS = '[Clock] SET HOURS'; 
    setHours(hours: number): Action {
        return {
            type: ClockActions.SET_HOURS,
            payload: hours
        }
    }

    static UPDATE_TIME = '[Clock] UPDATE TIME';
    updateTime(person): Action {
        return {
            type: ClockActions.UPDATE_TIME,
            payload: person
        }
    }
}

