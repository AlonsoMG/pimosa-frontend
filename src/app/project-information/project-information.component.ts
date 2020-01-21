import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {
  }

}
