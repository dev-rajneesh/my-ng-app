import { AbstractControl } from '@angular/forms';
import { CategoryLogic } from 'src/app/Models/App.Category.Logic';

export class CustomValidator {
    // if method is valid it will return null,
    // else it will return JSON Object as {}
    // e.g. {checkEvenn: false}
    static checkEven(ctrl: AbstractControl) : any {
       // value to be entered in the control
       let value = parseInt(ctrl.value);
       if(value % 2 === 0) {
         return null; // valid
       } else {
         return {checkEven: true}; // invalid
       }
    }

    static checkUnique(catId : any) : any {
      let catLogic = new CategoryLogic();
      let catList = catLogic.getCategories();

      for(let catrow of catList){
        if(catrow.CategoryRowId != catId){
          // return {checkUnique: true};
          return null; // valid
        }        
      }
      return {checkUnique: false};
    }
}