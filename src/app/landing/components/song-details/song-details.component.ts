import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { CheckedService } from '../../service';

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

  constructor(private router: ActivatedRoute, private checkService: CheckedService) { }

  async ngOnInit(): Promise<void> {
    this.router.params.subscribe(v => this.songId = parseInt(v['id']));
    this.subsciption = (await this.checkService.getChecked()).subscribe(v => {
      this.isInSongList = v.includes(this.songId)}
    );
  }

  public async addSong(){
    if(this.isInSongList){
      await this.checkService.remove(this.songId);
    } else {
      await this.checkService.add(this.songId);
    }
    
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

}
