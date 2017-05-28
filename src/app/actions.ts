import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()

export class ClockActions {
    static SET_SECONDS = '[Clock] SET SECONDS';
    setSeconds(): Action {
        return {
            type: ClockActions.SET_SECONDS
        }
    }

    static SET_HOURS = '[Clock] SET HOURS'; 
    setHours(): Action {
        return {
            type: ClockActions.SET_HOURS
        }
    }
    
}