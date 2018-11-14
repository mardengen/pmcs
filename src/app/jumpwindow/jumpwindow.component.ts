import { Component, OnInit,NgModule } from '@angular/core';
// import { DualListComponent } from 'angular-dual-listbox';
// import { AngularDualListBoxModule } from 'angular-dual-listbox';
import {Router} from '@angular/router'
import {MatListModule} from '@angular/material/list';
@NgModule({
  imports:[MatListModule],
  exports:[MatListModule]
})
@Component({
  selector: 'app-jumpwindow',
  templateUrl: './jumpwindow.component.html',
  styleUrls: ['./jumpwindow.component.css']
})

export class JumpwindowComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private routes:Router) { }
  source = [ 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King' ];
	target = [];
  // format = { add: 'Tilføje', remove: 'Fjerne', all: 'Alle', none: 'Intet',
  // direction: DualListComponent.LTR, draggable: true, locale: 'da' };
  ngOnInit() {
  }
  public Insert()
  {
    this.routes.navigate(['/home/demo2/']);

  }
  public goback()
  {
    this.routes.navigate(['/home/demo2/']);

  }
  public doSearch()
  {
    //return page
     this.routes.navigate(['/jumpwindow']);

    //show data in listbox


  }

}
