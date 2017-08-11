import { Component, Input, OnInit } from '@angular/core';
import { NavNode } from '../nav-node/nav-node';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() isWide = false;
  @Input() level = 1;
  @Input() node: NavNode
  @Input() isParentExpanded = true;

  isExpanded = false;
  isSelected = false;
  classes: {[index: string]: boolean };
  nodeChildren: NavNode[];

  constructor() { }

  ngOnInit() {
    this.nodeChildren = this.node.children;
  }

}
