import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Admin } from 'src/app/models/admin.model';
import { President } from 'src/app/models/president.model';

@Component({
  selector: 'app-add-president',
  templateUrl: './add-president.component.html',
  styleUrls: ['./add-president.component.scss']
})
export class AddPresidentComponent {
  presidentRes: President | undefined; // default
  // private userResPrivate: string | undefined;

  educations: string[] = ["Diploma", "Bachlor", "Master", "PH.D"];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  //#region Create Form Group/controler (AbstractControl)
  presidentFg = this.fb.group({ // formGroup
    nationalCodeCtrl: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]], // formControl
    firstNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    ageCtrl: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
    educationCtrl: ['', Validators.required],
    emailCtrl: ['', [Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]]
  });
  //#endregion

  //#region Forms Properties
  get NationalCodeCtrl(): FormControl {
    return this.presidentFg.get('nationalCodeCtrl') as FormControl;
  }
  get FirstNameCtrl(): FormControl {
    return this.presidentFg.get('firstNameCtrl') as FormControl;
  }
  get LastNameCtrl(): FormControl {
    return this.presidentFg.get('lastNameCtrl') as FormControl;
  }
  get AgeCtrl(): FormControl {
    return this.presidentFg.get('ageCtrl') as FormControl;
  }
  get EducationCtrl(): FormControl {
    return this.presidentFg.get('educationCtrl') as FormControl;
  }
  get EmailCtrl(): FormControl {
    return this.presidentFg.get('emailCtrl') as FormControl;
  }
  //#endregion

  //#region Methods
  registerPresident(): void {
    console.log(this.presidentFg.value);

    let president: President = {
      nationalCode: this.NationalCodeCtrl.value,
      firstName: this.FirstNameCtrl.value,
      lastName: this.LastNameCtrl.value,
      age: this.AgeCtrl.value,
      education: this.EducationCtrl.value,
      email: this.EmailCtrl.value,
    }

    this.http.post<President>('http://localhost:5000/api/president/register', president).subscribe(
      {next: response => {
        this.presidentRes = response; 
        console.log(this.presidentRes);
      }}
    );

    // reset the form
    this.presidentFg.reset();
  }

  // be user ajaze bede har vaght khast form ro clear kone
  clearForm(): void {
    this.presidentFg.reset();
  }
  //#endregion
}
