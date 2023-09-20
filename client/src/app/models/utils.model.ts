import {merge} from 'lodash-es';

export interface ILanguage {
    value: string,
    label: string,
    img: string
}

export interface IFlagStyle { 
    top: string, 
    padding: number,
    'margin-top': string, 
    'animation-delay': string, 
    '-webkit-animation-delay': string, 
}

export interface IApiPaginatorData {
    docs: any[];
    totalDocs?: number;
    options?: any;

    [key: string]: any;
}

export interface IResponseApi {
    success?: boolean;
    errors?: {
        code?: number;
        message?: string;
        show?: boolean; // si se muestra el mensaje
        data?: any; // data del error
    };
    data?: IApiPaginatorData | IBulkResponse | any;
    message?: string;
}

export interface IBulkResponse {
    itemsAdd?: number;
    itemsUpdated?: number;
    itemsFails?: number;
    itemsValid?: number;
    message?: string;
    bulkErrors?: any;
    errors?: string[]; // errores generales
    itemsErrors?: {
        item: any,
        error: string
    }[];
    apiErrors?: {
        item: any,
        error: string
    }[];
}

export declare class PageEvent {
    pageIndex: number;
    previousPageIndex?: number;
    pageSize: number;
    length: number;
}

export interface IQueryItems {
    paginator?: IPaginator;
    text?: string;
    params?: { [key in string]: any };
    sort?: { [key in string]: 1 | -1 };
}

export interface IPaginator {
    start?: number;
    end?: number;
}
  
export class Paginator implements IPaginator {
    start!: number;
    end!: number;
  
    constructor(options?: IPaginator) {
      merge(this, this._getDefaults(), options);
    }
  
    private _getDefaults(): IPaginator {
      return {
        start: 0,
        end: 10
      };
    }
}