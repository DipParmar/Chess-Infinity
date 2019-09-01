import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'ci-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userForm: FormGroup;
  public user: User = new User();

  /**
   * 
   */
  constructor(private formBuilder: FormBuilder) { }

  /**
   * 
   */
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      sendMail: true
    })
  }

  /**
   * 
   */
  signUp(): void {
    throw new Error("Not implemented yet");
  }

  /**
   * 
   */
  populateData(): void {
    this.userForm.setValue({
      firstName: 'member',
      lastName: 'new',
      email: 'member.new@chessInfinity.com',
      password: '123456789',
      confirmPassword: '123456789',
      sendMail: false
    });
    this.patchVal();
  }

  /**
   * 
   */
  patchVal(): void {
    this.userForm.patchValue({
      sendMail: true
    });
  }

}
