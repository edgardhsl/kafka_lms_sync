import { BaseModel } from "./base_model";

export class Student extends BaseModel {
    id: number;
    name: string;
    platform_id: string;
}