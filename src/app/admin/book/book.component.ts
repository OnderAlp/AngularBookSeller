import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../models/book.model";
import {BookService} from "../../services/book.service";

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {

  //book: Book = new Book();
  errorMessage: string = "";

  @Input() book: Book = new Book();
  @Output() createBook = new EventEmitter<any>();
  constructor(private bookService: BookService) {

  }

  saveBook() {
    this.bookService.saveBook(this.book).subscribe(data => {
      this.createBook.emit(data);
      $('#bookModal').modal('hide');
    }, error => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(error);
    })
  }

  showBookModal() {
    $('#bookModal').modal('show');
  }

}
