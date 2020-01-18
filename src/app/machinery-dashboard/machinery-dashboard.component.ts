import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machinery-dashboard',
  templateUrl: './machinery-dashboard.component.html',
  styleUrls: ['./machinery-dashboard.component.scss']
})
export class MachineryDashboardComponent implements OnInit {

  creationPanel: boolean = false;
  configurationPanel: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCreationPanel() {
    this.creationPanel = true;
    this.configurationPanel = false;
  }

}
