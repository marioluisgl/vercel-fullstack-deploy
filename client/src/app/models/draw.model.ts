import {merge} from 'lodash-es';

export interface IDraw {
    _id?: string;
    type?: EnumDrawType | null;
    date?: string | null;
    numbers?: number[];
    ball?: number | null;

    //UI
    created_at?: string;
}

export enum EnumDrawType {
    POWERBALL = "POWERBALL",
    MEGAMILLION = "MEGAMILLION",
}


export class Draw implements IDraw {
    _id?: string;
    type?: EnumDrawType;
    date?: string;
    numbers!: number[];
    ball?: number | null;

    constructor(options?: IDraw) {
        merge(this, this._getDefaults(), options);
    }

    private _getDefaults(): IDraw {
        return {
            type: null,
            date: null,
            numbers: [],
            ball: null,
        };
    }
}