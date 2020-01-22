export class CreateMachineryResponse {
  created: boolean;
  message: string;
  machineryPk: string;

  constructor(
    created: boolean,
    message: string,
    machineryPk: string

  ) {
    this.created = created;
    this.message = message;
    this.machineryPk = machineryPk;
  }
}

export class CreateProjectResponse {
  created: boolean;
  message: string;
  projectPk: string;

  constructor(
    created: boolean,
    message: string,
    projectPk: string

  ) {
    this.created = created;
    this.message = message;
    this.projectPk = projectPk;
  }
}

export class CreateTaskResponse {
  created: boolean;
  message: string;
  taskPk: string;

  constructor(
    created: boolean,
    message: string,
    taskPk: string

  ) {
    this.created = created;
    this.message = message;
    this.taskPk = taskPk;
  }
}

export class UpdateMachineryResponse {
  updated: boolean;
  message: string;

  constructor(
    updated: boolean,
    message: string,

  ) {
    this.updated = updated;
    this.message = message;
  }
}

export class UpdateProjectResponse {
  updated: boolean;
  message: string;

  constructor(
    updated: boolean,
    message: string,

  ) {
    this.updated = updated;
    this.message = message;
  }
}

export class UpdateTaskResponse {
  updated: boolean;
  message: string;

  constructor(
    updated: boolean,
    message: string,

  ) {
    this.updated = updated;
    this.message = message;
  }
}
