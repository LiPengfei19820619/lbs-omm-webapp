import { Component, Input, OnInit } from '@angular/core';
import { NavNode } from '../nav-node/nav-node';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input() nodes: NavNode[];

  constructor() { }

  ngOnInit() {
    this.nodes = [{url: "", title: "基本属性配置", tooltip: "配置基本属性", hidden: false, children: [
                                   {url: "/", title: "端口配置", tooltip: "配置端口", hidden: false, children: []}]
                  }];
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
