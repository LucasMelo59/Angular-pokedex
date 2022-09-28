import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() emmitSeach: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  search(value: string){
    this.emmitSeach.emit(value);
  }
}
