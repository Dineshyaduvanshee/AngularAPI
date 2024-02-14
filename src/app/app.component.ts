import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'AngularAPI';
  indicosbook! : Book[] ;
  
  constructor(private bookservice : BookService) {
   
    
  }
  ngOnInit(): void {
    this.getIndicosBooks(); 
  }
  getIndicosBooks(){
    this.bookservice.getBooksFromStor().subscribe(books =>{
      console.log(books);
      this.indicosbook = books
      console.log(this.indicosbook);

      
    })
  }
}
