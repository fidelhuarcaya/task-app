import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  firstFormGroup = this._formBuilder.group({
    task: ['', Validators.required],
    description: ['', Validators.required, Validators.minLength],
  });
  secondFormGroup = this._formBuilder.group({
    date: ['', Validators.required],
  });
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _formBuilder: FormBuilder, private service: TaskService) {

  }

  closeDialogForm() {

    this.service.dialogClose.next(true);
  }
  submit(){
    
  }

}
