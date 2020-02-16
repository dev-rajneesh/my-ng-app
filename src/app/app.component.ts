import { Component } from '@angular/core';

// selector: Custom HTML tag that will be used to refer and load component in DOM
// templateUrl: the external HTML file that contains UI for Component
// template: an inline HTML that contains UI for Component
// style: Inline CSS
// styleUrls: External CSS files

@Component({
  // selector: 'app-root',
  selector: 'app-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-app';
  message: string;
  name: string;
  categories: Array<any>;
  names: Array<string>;
  selectedName: string;
  selectedCat: any;

  constructor(){
    this.message = "My name is Angular";
    this.name = "";
    this.names = ['Rajneesh','Monika', 'Sudanta', 'Prasanna'];
    this.categories = [
      {CatId: 101, CatName: 'ECT'},
      {CatId: 102, CatName: 'ECL'},
      {CatId: 103, CatName: 'FOD'}
    ];
    this.selectedName = '';
    this.selectedCat = {};
  }

  display(): void{
    this.message = "My name is Angular 9";
  }

  acceptValue(evt) : void{
    this.message += evt.target.value;
  }
}
