import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { CheckedService } from '../../service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit, OnDestroy {

  public allSelected$ = new BehaviorSubject<boolean>(false);
  public checkSubscription: Subscription;
  
  public checked: Number[] = [];
  public songs: {name: string, id: number}[] = [
    {name: "Akela, Bagheera", id: 1},
    {name: "Ballada o wilku z Gubbio", id: 2},
    {name: "Bandarlog", id: 3},
    {name: "Bandarlog - ród bez Prawa", id: 4},
    {name: "Braciszkowie skrzydlaci", id: 5},
    {name: "Czerwone kwiecie", id: 6},
    {name: "Czuwaj wilczku", id: 7},
  ];

  constructor(private checkService: CheckedService) { }

  async ngOnInit(): Promise<void> {
    this.checkSubscription = (await this.checkService.getChecked()).subscribe(v => this.checked = v);
    this.allSelected$.next(this.checked.length == this.songs.length);
  }

  public isChecked(id: number){
    return this.checked.includes(id);
  }

  public async checkSong(id: number){
    if(this.isChecked(id)){
      await this.checkService.remove(id);
    } else {
      await this.checkService.add(id);
    }

    this.allSelected$.next(this.checked.length == this.songs.length);
  }
  
  public async checkAll(){
    if(this.allSelected$.value){
      this.allSelected$.next(false);
      await this.checkService.reset();
    } else {
      this.allSelected$.next(true);
      let check = this.songs.map(val => val.id);
      await this.checkService.set(check);
    }
  }


  ngOnDestroy(): void {
      this.checkSubscription.unsubscribe();
  }
}
