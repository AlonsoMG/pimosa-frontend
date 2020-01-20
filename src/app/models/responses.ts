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