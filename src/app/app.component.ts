import { Component } from '@angular/core';
import { MatIconRegistry ,MatSidenav,MatDrawerToggleResult} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
export interface Section {
  name: string;
  updated: Date;
  //for table
}
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it-ironman-demo-angular-material';
  // $(function(){
  //   $('#exmple').DataTable();
  // });
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  
  // ngOnInit() {}
  // toggleSideNav(sideNav: MatSidenav) {
  //   sideNav.toggle().then((result: MatDrawerToggleResult) => {
  //     console.log(result);
  //     console.log(`選單狀態：${result.type}`);
  //   });
  // }
}
