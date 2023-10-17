import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent {
  
  form = new FormGroup({

  name: new FormControl(),
  rollno: new FormControl()
});

get login(): any {
    return this.form.get('login');
}
get password(): any {
  return this.form.get('password');
}

onSubmit(): void {
    console.log("alert:Form is valid : ", this.form.valid);
    alert('your login is correct!')
  }
}

 
 



