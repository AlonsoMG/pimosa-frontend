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