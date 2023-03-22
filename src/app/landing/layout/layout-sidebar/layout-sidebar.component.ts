import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from '../../model/menuItem.model';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit, OnDestroy {
  public menuItems: MenuItem[] = [];
  public menuSub: Subscription;

  constructor(private menuService: MenuService) {}

  async ngOnInit(): Promise<void> {
    this.menuSub = (await this.menuService.get()).subscribe(v => this.menuItems = v);
   
  }

  ngOnDestroy(): void {
      this.menuSub.unsubscribe();
  }
}