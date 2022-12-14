interface IPermission {
    id?: string | null;
    name?: string | null;
}

export class Permission implements IPermission {
    constructor(
        public id?: string | null,
        public name?: string | null
    ) {}
}
