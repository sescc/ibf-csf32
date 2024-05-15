import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  foodArray!: FormArray;

  user: User = new User("","","",[]);
  foodGroup!: FormGroup<any>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.foodArray = this.fb.array([]);

    this.userForm = this.fb.group({
      firstname: this.fb.control("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      lastname: this.fb.control<string>("", [Validators.minLength(5), Validators.maxLength(50)]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      // food: this.fb.array([]),
      foods: this.foodArray,
    })

  }

  addNewFood() {
    this.foodGroup = this.fb.group({
      f1: this.fb.control("", Validators.required),
    })
    this.foodArray.push(this.foodGroup);
  }

  deleteFood(item: number) {
    // if (this.foodArray.length !== 1)
      this.foodArray.removeAt(item);
  }

  processUserForm() {
    const userInfo = this.userForm.value;
    console.log(">>>User Info: " + this.userForm.controls['foods']);
    console.log(">>>User Info: " + this.userForm.controls['firstname'].value);

    for (var food of userInfo.foods) {
      console.log("UserInfo food.f1: " + food.f1);
    }
  }

}
