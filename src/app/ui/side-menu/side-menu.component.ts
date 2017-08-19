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
    this.nodes = [{url: null, title: "安全管控配置", tooltip: "配置安全管控相关属性", hidden: false, children: [
                                   {url: null, title: "安全管控基本属性配置", tooltip: "配置安全管控基本属性", hidden: false, children: [
                                        {url: "/securityctrl-property", title: "查看安全管控基本属性配置", tooltip: "查看安全管控基本属性", hidden: false, children: null},
                                        {url: "/", title: "增加管控基本属性配置", tooltip: "增加安全管控基本属性", hidden: false, children: null},
                                        {url: "/", title: "修改管控基本属性配置", tooltip: "修改安全管控基本属性", hidden: false, children: null},
                                        {url: "/", title: "删除管控基本属性配置", tooltip: "删除安全管控基本属性", hidden: false, children: null}
                                   ]},
                                   {url: "/", title: "安全管控节点配置", tooltip: "配置安全管控节点", hidden: false, children: null}]
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
