import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../../model/menuItem.model';
import { CheckedService } from '../../service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit, OnDestroy {

  public allSelected$ = new BehaviorSubject<boolean>(false);
  public allSelectedService$ = new Subject<boolean>();
  public subscriptions: Subscription[] = [];
  
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

  public menuItems: MenuItem[] = [
    {text: "Zaznacz Wszystko", hasOnClick: true, function: this.allSelectedService$, hasRouter: false},
    {text: "Wygeneruj śpiewnik", hasOnClick: false, hasRouter: true, route: "generate"}
  ]

  constructor(private checkService: CheckedService, private menuService: MenuService) { }

  async ngOnInit(): Promise<void> {
    this.subscriptions.push(this.allSelectedService$.subscribe(v => this.checkAll()));
    this.subscriptions.push((await this.checkService.getChecked()).subscribe(v => this.checked = v));
    this.allSelected$.next(this.checked.length == this.songs.length);

    if(this.allSelected$.value){
      this.menuItems[0].text="Oddznacz wszystko";
    }

    await this.menuService.set(this.menuItems);await this.menuService.set(this.menuItems);
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
      this.menuItems[0].text = "Zaznacz wszystko";
      await this.menuService.set(this.menuItems);
      await this.checkService.reset();
    } else {
      this.allSelected$.next(true);
      this.menuItems[0].text = "Oddznacz wszystko";
      await this.menuService.set(this.menuItems);
      let check = this.songs.map(val => val.id);
      await this.checkService.set(check);
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }
}
