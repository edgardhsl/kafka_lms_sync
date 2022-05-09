import { BaseModel } from "./base_model";

export class Course extends BaseModel {
    id: string;
    name: string;
    platform_id: string;
}