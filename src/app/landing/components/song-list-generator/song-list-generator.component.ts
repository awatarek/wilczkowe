import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CheckedService } from '../../service';

@Component({
  selector: 'app-song-list-generator',
  templateUrl: './song-list-generator.component.html',
  styleUrls: ['./song-list-generator.component.scss']
})
export class SongListGeneratorComponent {
  public checkSubscription: Subscription;
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


  constructor(private checkService: CheckedService) { }

  async ngOnInit(): Promise<void> {
    this.checkSubscription = (await this.checkService.getChecked()).subscribe(v => {this.checked = v;
      this.checkedSongs = this.songs.filter(v => this.checked.includes(v.id));
    });
    console.log(this.checkedSongs);
  }

}
