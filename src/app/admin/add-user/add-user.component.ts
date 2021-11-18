import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit {

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
