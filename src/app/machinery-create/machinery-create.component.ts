import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-machinery-create',
  templateUrl: './machinery-create.component.html',
  styleUrls: ['./machinery-create.component.scss']
})
export class MachineryCreateComponent implements OnInit {

  newMachineryForm = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(254),
        Validators.minLength(2)
      ]
    ],
    code: [
      '',
      [
        Validators.required,
        Validators.maxLength(254),
        Validators.minLength(2)
      ]
    ],
    brand: [
      '',
      [
        Validators.maxLength(254),
        Validators.minLength(2)
      ]
    ],
    price: [
      '',
      [
        Validators.maxLength(8),
        Validators.minLength(2)
      ]
    ],
    maintenanceCost: [
      '',
      [
        Validators.maxLength(8),
        Validators.minLength(2)
      ]
    ],
    acquisitionDate: [
      '',
      []
    ],
    type: [
      '',
      [
        Validators.required
      ]
    ],
    powerSource: [
      '',
      [
        Validators.required
      ]
    ],
    displacement: [
      '',
      [
        Validators.required
      ]
    ],
    operation: [
      '',
      [
        Validators.required
      ]
    ],
    work: [
      '',
      [
        Validators.required
      ]
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  submitNewMachineryForm(){

  }

}
