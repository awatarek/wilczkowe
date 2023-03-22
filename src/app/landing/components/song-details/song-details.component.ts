import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { MenuItem } from '../../model/menuItem.model';
import { CheckedService } from '../../service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit, OnDestroy {
  public isInSongList: boolean = false;
  private songId: number = 0;
  public subsciption: Subscription;
  public cordVisible: boolean = false;
  public addSongOnService$ = new Subject<boolean>();
  public subscriptions: Subscription[] = [];
  
  public menuItems: MenuItem[] = [
    {text: "Dodaj do śpiewnika", hasOnClick: true, function: this.addSongOnService$, hasRouter: false},
    {text: "Wróć do listy piosenek", hasOnClick: false, hasRouter: true, route: ""}
  ]

  constructor(private router: ActivatedRoute, private checkService: CheckedService, private menuService: MenuService) { }

  async ngOnInit(): Promise<void> {
    this.router.params.subscribe(v => this.songId = parseInt(v['id']));
    this.subscriptions.push((await this.checkService.getChecked()).subscribe(v => {
      this.isInSongList = v.includes(this.songId)}
    ));

    await this.menuService.set(this.menuItems);
  }

  public async addSong(){
    if(this.isInSongList){
      await this.checkService.remove(this.songId);
      this.menuItems[0].text = "Dodaj do śpiewnika"
    } else {
      await this.checkService.add(this.songId);
      this.menuItems[0].text = "Usuń z śpiewnika"
    }
    await this.menuService.set(this.menuItems);
  }

  ngOnDestroy(){
    this.subscriptions.map(s => s.unsubscribe());
  }

}
