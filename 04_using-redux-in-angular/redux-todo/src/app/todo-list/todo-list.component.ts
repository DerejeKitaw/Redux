import { Component, OnInit } from '@angular/core';
import {NgRedux, select } from '@angular-redux/store';
import { IAppState} from '../store';
import {ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from '../actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
