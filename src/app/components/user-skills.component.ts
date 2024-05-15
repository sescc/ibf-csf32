import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrl: './user-skills.component.css'
})
export class UserSkillsComponent implements OnInit, OnChanges {

  title: string = "Skills";
  skillForm!: FormGroup;

  // Lifecycle stage 1
  constructor(private fb: FormBuilder) {}

  // Lifecycle stage 2
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["name"].currentValue !== changes["name"].previousValue) {
      console.log("Current <-> Previous: " + changes["name"].currentValue + " <-> " + changes["name"].previousValue)
    }
  }

  // Lifecycle stage 3
  ngOnInit(): void {
    this.skillForm = this.fb.group({
      name: "",
      skills: this.fb.array([])
    })
  }

  getSkills(): FormArray {
    return this.skillForm?.get("skills") as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      Skill: "",
      Experience: ""
    })
  }

  addSkill() {
    this.getSkills().push(this.newSkill());
  }

  onSubmit() {
    console.log(this.skillForm.value);
  }

}
