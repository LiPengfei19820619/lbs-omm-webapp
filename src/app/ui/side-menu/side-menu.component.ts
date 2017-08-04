import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuTreeClicked(iconId: string, nodesId: string) {
    let iconElement: HTMLElement = window.document.getElementById(iconId); 
    let nodesElement: HTMLElement = window.document.getElementById(nodesId);
    
    if (nodesElement.hidden) {
      nodesElement.hidden = false;
      iconElement.style.transform = "rotate(90deg)";
    } else {
      nodesElement.hidden = true;
      iconElement.style.transform = "";
    }
  }

}
