import { BaseModel } from "./base_model";

export class Category extends BaseModel {
    id: string;
    name: string;
    platform_id: string;
}