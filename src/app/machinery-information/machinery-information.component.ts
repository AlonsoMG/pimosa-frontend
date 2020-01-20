import { Machinery } from 'src/app/models/machinery';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-machinery-information',
  templateUrl: './machinery-information.component.html',
  styleUrls: ['./machinery-information.component.scss']
})
export class MachineryInformationComponent implements OnInit {

  @Input() machinery: Machinery;

  constructor() { }

  ngOnInit() { 
  }

}
