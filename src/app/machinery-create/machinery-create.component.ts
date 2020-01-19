import { CreateMachineryResponse } from './../models/responses';
import { Displacement } from './../models/displacement';
import { Operation } from './../models/operation';
import { PowerSource } from './../models/power-source';
import { Work } from './../models/work';
import { MachineryType } from './../models/machinery-type';
import { MachineryService } from './../services/machinery-service/machinery.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-machinery-create',
  templateUrl: './machinery-create.component.html',
  styleUrls: ['./machinery-create.component.scss']
})
export class MachineryCreateComponent implements OnInit {

  displacementList: Displacement[] = [];
  machineryTypeList: MachineryType[] = [];
  operationList: Operation[] = [];
  powerSourceList: PowerSource[] = [];
  workList: Work[] = [];

  successAlertMessage: string = null;
  errorAlertMessage: string = null;

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
    private machineryService: MachineryService
  ) { }

  ngOnInit() {
    this.getDisplacementList();
    this.getMachineryTypeList();
    this.getOperationList();
    this.getPowerSourceList();
    this.getWorkList();
  }

  closeErrorAlert() {
    this.errorAlertMessage = null;
  }

  closeSuccessAlert() {
    this.successAlertMessage = null;
  }

  submitNewMachineryForm() {
    let code = this.newMachineryForm.value.code;
    let name = this.newMachineryForm.value.name;
    let brand = this.newMachineryForm.value.brand;
    let price = this.newMachineryForm.value.price;
    let maintenanceCost = this.newMachineryForm.value.maintenanceCost;
    let acquisitionDate = this.newMachineryForm.value.acquisitionDate;
    let type = this.newMachineryForm.value.type;
    let powerSource = this.newMachineryForm.value.powerSource;
    let displacement = this.newMachineryForm.value.displacement;
    let operation = this.newMachineryForm.value.operation;
    let work = this.newMachineryForm.value.work;

    this.createMachinery(
      code,
      name,
      brand,
      price,
      maintenanceCost,
      acquisitionDate,
      type,
      powerSource,
      displacement,
      operation,
      work
    );

    console.log(`Form submitted`);
  }

  private createMachinery(
    code: string,
    name: string,
    brand: string,
    price: number,
    maintenanceCost: number,
    acquisitionDate: string,
    type: string,
    powerSource: string,
    displacement: string,
    operation: string,
    work: string
  ) {
    this.machineryService.createMachinery(
      code,
      name,
      brand,
      price,
      maintenanceCost,
      acquisitionDate,
      type,
      powerSource,
      displacement,
      operation,
      work
    ).subscribe((response) => {
      console.log(response);
      let createMachineryResponse: CreateMachineryResponse = new CreateMachineryResponse(
        response['outCreated'],
        response['outMessage'],
        response['outMachineryPK']
      );

      this.resetAlerts();

      if (createMachineryResponse.created) {
        this.successAlertMessage = createMachineryResponse.message;
      } else {
        this.errorAlertMessage = createMachineryResponse.message;
      }
      window.scrollTo(0,0);
    })
  }

  private getDisplacementList() {
    this.displacementList = [];
    this.machineryService.getDisplacementList()
      .subscribe((response) => {
        let displacement: Displacement = null;
        response.forEach((element) => {
          displacement = new Displacement(
            element['PK'],
            element['Name']
          );
          this.displacementList.push(displacement);
        });
      });
  }

  private getMachineryTypeList() {
    this.machineryTypeList = [];
    this.machineryService.getMachineryTypeList()
      .subscribe((response) => {
        let machineryType: MachineryType = null;
        response.forEach((element) => {
          machineryType = new MachineryType(
            element['PK'],
            element['Name']
          );
          this.machineryTypeList.push(machineryType);
        });
      });
  }

  private getOperationList() {
    this.operationList = [];
    this.machineryService.getOperationList()
      .subscribe((response) => {
        let operation: Operation = null;
        response.forEach((element) => {
          operation = new Operation(
            element['PK'],
            element['Name']
          );
          this.operationList.push(operation);
        });
      });
  }

  private getPowerSourceList() {
    this.powerSourceList = [];
    this.machineryService.getPowerSourceList()
      .subscribe((response) => {
        let powerSource: PowerSource = null;
        response.forEach((element) => {
          powerSource = new PowerSource(
            element['PK'],
            element['Name']
          );
          this.powerSourceList.push(powerSource);
        });
      });
  }

  private getWorkList() {
    this.workList = [];
    this.machineryService.getWorkList()
      .subscribe((response) => {
        let work: Work = null;
        response.forEach((element) => {
          work = new Work(
            element['PK'],
            element['Name']
          );
          this.workList.push(work);
        });
      });
  }

  private resetAlerts() {
    this.successAlertMessage = null;
    this.errorAlertMessage = null;
  }

}
