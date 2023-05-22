import { Body, Controller, Post } from '@nestjs/common';
import { Category } from '../../../../model/category';
import { CategoryService } from '../../services/category/category.service';

@Controller('classroom/category')
export class CategoryController {

    constructor(
        private _categoryService: CategoryService
    ) {}

    @Post("")
    save(@Body() category: Category): void {
        this._categoryService.save(category).then(console.log);
    }

}
