import { Component, Input, OnInit } from '@angular/core';
import { NavNode } from '../nav-node/nav-node';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

const actionMapping:IActionMapping = {
  mouse: {
    click: (tree, node, $event) => {
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    }
  }
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input() nodes: NavNode[];

  constructor() { }

  ngOnInit() {
    this.nodes = [{url: null, title:"配置管理", tooltip:"进行数据配置操作", hidden: false, children: [
                          {url: null, title: "安全管控配置", tooltip: "配置安全管控相关属性", hidden: false, children: [
                                 {url: null, title: "安全管控基本属性配置", tooltip: "配置安全管控基本属性", hidden: false, children: [
                                        {url: "/securityctrl-property", title: "查看安全管控基本属性配置", tooltip: "查看安全管控基本属性", hidden: false, children: null},
                                        {url: "/", title: "增加管控基本属性配置", tooltip: "增加安全管控基本属性", hidden: false, children: null},
                                        {url: "/", title: "修改管控基本属性配置", tooltip: "修改安全管控基本属性", hidden: false, children: null},
                                        {url: "/", title: "删除管控基本属性配置", tooltip: "删除安全管控基本属性", hidden: false, children: null}
                                 ]},
                                 {url: null, title: "安全管控节点配置", tooltip: "配置安全管控节点", hidden: false, children: [
                                        {url: "/adjnodes", title: "查看安全管控节点配置", tooltip: "查看安全管控节点", hidden: false, children: null},
                                        {url: "/", title: "增加管控节点配置", tooltip: "增加安全管控节点", hidden: false, children: null},
                                        {url: "/", title: "修改管控节点配置", tooltip: "修改安全管控节点", hidden: false, children: null},
                                        {url: "/", title: "删除管控节点配置", tooltip: "删除安全管控节点", hidden: false, children: null}
                                 ]}
                          ]},
                          {url: null, title: "NetApi网关配置", tooltip: "配置NetApi网关相关属性", hidden: false, children: [
                            {url: null, title: "NetApi网关属性配置", tooltip: "配置NetApi网关基本属性", hidden: false, children: [
                                   {url: "/securityctrl-property", title: "查看NetApi网关基本属性配置", tooltip: "查看NetApi网关基本属性", hidden: false, children: null},
                                   {url: "/", title: "修改NetApi网关基本属性配置", tooltip: "修改NetApi网关基本属性", hidden: false, children: null}
                            ]},
                            {url: null, title: "NetApi节点配置", tooltip: "配置NetApi节点", hidden: false, children: [
                                   {url: "/adjnodes", title: "查看NetApi节点配置", tooltip: "查看NetApi节点", hidden: false, children: null},
                                   {url: "/", title: "增加NetApi节点配置", tooltip: "增加NetApi节点", hidden: false, children: null},
                                   {url: "/", title: "修改NetApi节点配置", tooltip: "修改NetApi节点", hidden: false, children: null},
                                   {url: "/", title: "删除NetApi节点配置", tooltip: "删除NetApi节点", hidden: false, children: null}
                            ]}
                          ]}
                  ]}
               ];
      
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

  customTemplateStringOptions: ITreeOptions = {
    actionMapping
  }

}
