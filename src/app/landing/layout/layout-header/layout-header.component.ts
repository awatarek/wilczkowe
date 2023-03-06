import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent {
  public display: boolean = false;
  public searchTerm: string = "";
  public songs: {name: string, id: number}[] = [
    {name: "Akela, Bagheera", id: 1},
    {name: "Ballada o wilku z Gubbio", id: 2},
    {name: "Bandarlog", id: 3},
    {name: "Bandarlog - ród bez Prawa", id: 4},
    {name: "Braciszkowie skrzydlaci", id: 5},
    {name: "Czerwone kwiecie", id: 6},
    {name: "Czuwaj wilczku", id: 7},
  ];
  public results: {name: string, id: number}[] = [];

  constructor(private router: Router){

  }

  public search(){
    this.results = this.songs.filter(v => v.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  public navigateTo(){
    this.display = false;
    this.searchTerm = "";
  }

}
