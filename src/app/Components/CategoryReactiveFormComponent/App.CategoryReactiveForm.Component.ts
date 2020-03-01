import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/App.Category.Model';
import { CategoryLogic } from 'src/app/Models/App.Category.Logic';

// Importing FormGroup and FormControl for implemeting
// the reactive form
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './app.custom.validator';

@Component({
    selector: 'App-CategoryReactiveForm-Component',
    templateUrl: './App.CategoryReactiveForm.View.html'
    // styleUrls: ['./categoryreactiveform-component.component.scss'] Deleted bcz we will use bootstrap
})
export class CategoryReactiveFormComponent implements OnInit {
    // OnInit is the Component Lifecycle Interface, that provides
    // the ngOnInit() method
    category: Category;
    private logic: CategoryLogic;
    categories: Array<Category>;
    tableColumnHeaders : Array<string>;

    // Define the FormGroup object, this will be used to Map model class properties to Form
    frmCategory: FormGroup;
    catIdList : Array<string>;

    constructor() { 
        this.logic = new CategoryLogic();
        this.categories = new Array<Category>();
        this.category = new Category(0, '','',0);
        this.tableColumnHeaders = new Array<string>();
        this.catIdList = new Array<string>();

        // Instantiate the frmCategory and map properties of the category class using
        // FormControl into the group
        this.frmCategory = new FormGroup({
            CategoryRowId: new FormControl(this.category.CategoryRowId, 
                Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(6),
                Validators.pattern('[0-9]+'), CustomValidator.checkEven, CustomValidator.checkUnique])),
            CategoryId: new FormControl(this.category.CategoryId),
            CategoryName: new FormControl(this.category.CategoryName),
            BasePrice: new FormControl(this.category.BasePrice)
        })
    }

    // This method is invoked immediately after ctor 'Only Once' when class is instantiated 
    // So ctor and ngOnInit() is called only once
    // Write logic in this methid that we cannot write on ctor or
    // If such logic is written in ctor, it will delar ctor execution
    ngOnInit(): void { 
        // Iterate over the Category object to read all its property names
        for(let p in this.category){
            this.tableColumnHeaders.push(p);
        }
        this.categories = this.logic.getCategories();
    }

    clear() : void{
        this.category = new Category(0, '','',0);
        this.frmCategory.setValue(this.category);      
    }

    save() : void{
        // Read the posted data from ReactForm using 'value' property of
        // frmCategory, the instance of FormGroup
        this.category = this.frmCategory.value;
        this.categories = this.logic.saveCategory(this.category);
    }

    getSelectedCategory(cat: Category) : void{
        this.frmCategory.setValue(cat); // set the valie of form based on selected category
        this.category = this.frmCategory.value;
    }
}
