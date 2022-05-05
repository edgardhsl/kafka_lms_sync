import { BaseModel } from "./base_model";

export class Course extends BaseModel {
    id: number;
    name: string;
    platform_id: string;
}