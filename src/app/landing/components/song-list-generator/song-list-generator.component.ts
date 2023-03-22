import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MenuItem } from '../../model/menuItem.model';
import { CheckedService } from '../../service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-song-list-generator',
  templateUrl: './song-list-generator.component.html',
  styleUrls: ['./song-list-generator.component.scss']
})
export class SongListGeneratorComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public songs: {name: string, id: number}[] = [
    {name: "Akela, Bagheera", id: 1},
    {name: "Ballada o wilku z Gubbio", id: 2},
    {name: "Bandarlog", id: 3},
    {name: "Bandarlog - ród bez Prawa", id: 4},
    {name: "Braciszkowie skrzydlaci", id: 5},
    {name: "Czerwone kwiecie", id: 6},
    {name: "Czuwaj wilczku", id: 7},
  ];
  public checked: Number[] = [];
  public checkedSongs: {name: string, id: number}[] = [];
  public downloadOnService$ = new Subject<boolean>();

  public menuItems: MenuItem[] = [
    {text: "Pobierz śpiewnik w PDF", hasOnClick: true, function: this.downloadOnService$, hasRouter: false},
    {text: "Wróć do listy piosenek", hasOnClick: false, hasRouter: true, route: ""}
  ]


  constructor(private checkService: CheckedService,  private menuService: MenuService) { }

  async ngOnInit(): Promise<void> {
    this.subscriptions.push((await this.checkService.getChecked()).subscribe(v => {this.checked = v;
      this.checkedSongs = this.songs.filter(v => this.checked.includes(v.id));
    }));

    await this.menuService.set(this.menuItems);
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }

}
