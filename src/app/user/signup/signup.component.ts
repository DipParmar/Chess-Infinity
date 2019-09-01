import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { User } from '../user';
import { debounceTime } from 'rxjs/operators';

function ratingRange(min: number = 1, max: number = 5): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  }
}

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const password = c.get('password');
  const confirmPassword = c.get('confirmPassword');

  if (password.pristine === true || confirmPassword.pristine === true) {
    return null;
  } else if (password.value !== confirmPassword.value) {
    return { 'match': true };
  }
  return null;
}

@Component({
  selector: 'ci-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userForm: FormGroup;
  public user: User = new User();
  public passwordMessage: string;

  private validationMessages = {
    required: 'Please enter the value',
    valid: 'Please enter valid value',
    length: 'Please enter value of appropriate length'
  }

  /**
   * 
   */
  constructor(private formBuilder: FormBuilder) { }

  /**
   * 
   */
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: passwordMatcher }),
      phone: '',
      notification: 'email',
      sendMail: true,
      rating: [0, ratingRange(1, 5)]
    })

    this.userForm.get('notification').valueChanges.subscribe((value) => {
      this.setNotification(value);
    });

    const passwordControl = this.userForm.get('passwordGroup.password');

    passwordControl.valueChanges.pipe(debounceTime(1000)).subscribe(
      value => this.setMessage(passwordControl)
    );
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
    this.sendMail();
  }

  /**
   * 
   */
  sendMail(): void {
    this.userForm.patchValue({
      sendMail: true
    });
  }

  /**
   * 
   */
  setNotification(notifyVia: string): void {
    const phoneControl = this.userForm.get('phone');

    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }

  /**
   * 
   */
  setMessage(control: AbstractControl): void {
    this.passwordMessage = '';

    if ((control.touched || control.dirty) && control.errors) {
      this.passwordMessage = Object.keys(control.errors).map(
        key => this.passwordMessage += this.validationMessages[key]).join('');
    }
  }

}
