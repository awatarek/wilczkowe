import { BehaviorSubject, Subject } from "rxjs";

export class MenuItem{
    public text: string;
    public route?: string;
    public function?: BehaviorSubject<any> | Subject<any>;
    public canHaveValue?: boolean;
    public value?: any;
    public hasOnClick: boolean;
    public hasRouter: boolean;
}