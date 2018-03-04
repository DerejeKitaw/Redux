import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from '../actions';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    prioprity: 'low',
    isCompleted: false
  };
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}
}
