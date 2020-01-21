import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-machinery',
  templateUrl: './project-machinery.component.html',
  styleUrls: ['./project-machinery.component.scss']
})
export class ProjectMachineryComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
