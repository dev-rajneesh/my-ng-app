// BrowserModule, loads the APpModule contents in the browser and render it
import { BrowserModule } from '@angular/platform-browser';
// NgModule the class decorator to define class as Angular Module
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom Module for containing Routing Object Model
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryReactiveFormComponent } from './Components/CategoryReactiveFormComponent/App.CategoryReactiveForm.Component';

// imports: of type array, used to import and load standard Angular Modules and 
// external modules in current application

// declarations: of the type array, used to declare instances of all componenets
// directives and pipes of this application in current module

// pipes: of the type array, used to register angular service in DI container at Module level

// bootstrap: of the type array, used to bootstrap one of more component in browser
// when AppModule is loaded

// exports: array type, used to export components/services/directives/pipes from current application to other
// angular application

// entryComponent: Components not bootstrapped but used by bootstraped components to load

@NgModule({
  declarations: [
    AppComponent,
    CategoryReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CategoryReactiveFormComponent]
})
export class AppModule { }
