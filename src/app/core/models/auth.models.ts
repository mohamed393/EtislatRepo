export class User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    password: string;
    token?: string;
    email?: string;
}
