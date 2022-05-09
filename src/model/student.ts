import { BaseModel } from "./base_model";

export class Student extends BaseModel {
    id: string;
    name: string;
    platform_id: string;
}