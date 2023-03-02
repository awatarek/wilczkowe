import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckedService {
  private checked$ = new BehaviorSubject<Number[]>([]);
  constructor() { }

  public async getChecked(){
    return this.checked$;
  }

  public async add(id: number){
    let check = this.checked$.value;
    check.push(id);
    this.checked$.next(check);
  }

  public async remove(id: number){
    let check = this.checked$.value;
    check.splice(check.indexOf(id), 1);
    this.checked$.next(check);
  }

  public async reset(){
    this.checked$.next([]);
  }

  public async set(ids: number[]){
    this.checked$.next(ids);
  }
}
