import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  
  @Output() filter = "";
  @Output() newFilterEvent = new EventEmitter<string>();

  onInputChange(name: string){
    console.log('onInputChange', name)
    const nameAsPascalCase = name.charAt(0).toUpperCase() + name.substr(1);
    this.newFilterEvent.emit(nameAsPascalCase);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
