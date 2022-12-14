import { Permission } from "../permission/permission.model";
import { User } from "../user/user.model";

interface IEmployee {
    employeeId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    permissions?: Permission[] | null;
}

export class Employee implements IEmployee {
    constructor(
        public employeeId?: string | null,
        public firstName?: string | null,
        public lastName?: string | null,
        public permissions?: Permission[] | null
    ) {}
}
