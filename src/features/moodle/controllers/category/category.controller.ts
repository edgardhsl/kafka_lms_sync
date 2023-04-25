import { Body, Controller, Post } from '@nestjs/common';
import { EachMessagePayload } from 'kafkajs';
import { Category } from 'src/model/category';
import { CategoryService } from '../../services/category/category.service';

@Controller('moodle/category')
export class CategoryController {

    constructor(
        private _categoryService: CategoryService
    ) {}

    @Post()
    save(@Body() category: Category): void {
        this._categoryService.save(category).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
