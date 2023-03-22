import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems$ = new BehaviorSubject<any[]>([]);
  constructor() { }

  public async get(){
    return this.menuItems$;
  }

  public async set(ids: any){
    this.menuItems$.next(ids);
  }
}
