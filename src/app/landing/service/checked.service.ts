import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckedService {
  private checked$ = new BehaviorSubject<Number[]>([]);
  constructor() {
    if(localStorage.getItem("checked-wolfpack-songs")){
      this.checked$.next(localStorage.getItem("checked-wolfpack-songs").split(",").map(Number));
    }
  }

  public async getChecked(){
    return this.checked$;
  }

  public async add(id: number){
    let check = this.checked$.value;
    check.push(id);
    this.checked$.next(check);
    localStorage.setItem("checked-wolfpack-songs", this.checked$.value+"");
  }

  public async remove(id: number){
    let check = this.checked$.value;
    check.splice(check.indexOf(id), 1);
    this.checked$.next(check);
    localStorage.setItem("checked-wolfpack-songs", this.checked$.value+"");
  }

  public async reset(){
    this.checked$.next([]);
    localStorage.setItem("checked-wolfpack-songs", this.checked$.value+"");
  }

  public async set(ids: number[]){
    this.checked$.next(ids);
    localStorage.setItem("checked-wolfpack-songs", this.checked$.value+"");
  }
}
