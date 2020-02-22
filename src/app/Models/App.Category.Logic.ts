// Importing the exported class from the file
import { Category } from './App.Category.Model';

export class CategoryLogic{
    categories: Array<Category>;

    constructor(){
        this.categories = new Array<Category>();
        this.categories.push(new Category(1, 'Cat001', 'Electronics', 1200));
        this.categories.push(new Category(2, 'Cat002', 'Electrical', 400));
        this.categories.push(new Category(3, 'Cat003', 'Food', 30));
        this.categories.push(new Category(4, 'Cat004', 'Fashion', 620));
    }

    getCategories() : Array<Category>{
        return this.categories;
    }

    saveCategory(cat: Category) : Array<Category>{
        this.categories.push(cat);
        return this.categories;
    }
}