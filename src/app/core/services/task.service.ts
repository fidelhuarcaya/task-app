import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  dialogClose= new Subject<Boolean>();

  constructor() { }

}
