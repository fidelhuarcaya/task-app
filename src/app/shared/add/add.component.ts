import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/core/services/task.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  taskAdd = false;
  dialogRef: any;
  constructor(public service: TaskService, public dialog: MatDialog) {
    this.service.dialogClose.next(false);
    this.service.dialogClose.subscribe(value => {
      if (value) this.dialogRef.close();
    })
  }

  ngOnInit(): void {
  }

  addTask() {
    this.dialogRef = this.dialog.open(FormComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });


  }

}
