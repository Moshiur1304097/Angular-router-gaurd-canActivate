import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SaveData } from 'src/app/auth/save-data-interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})

export class AddUserComponent implements OnInit, SaveData {

form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

    isDataSaved(): boolean{
      return !this.form.dirty;
    }
}
