import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  jobForm !: FormGroup;
  actionBtn: string = "Save";

  constructor(private formBuilder: FormBuilder, private toast: NgToastService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      position: ['', Validators.required],
      companyname: ['', Validators.required],
      role: ['', Validators.required],
      salary: ['', Validators.required],
      location: ['', Validators.required],
      skillsrequired: ['', Validators.required],
      criteria: ['', Validators.required],
    })
    if (this.editData) {
      this.actionBtn = "Update";
      this.jobForm.controls['position'].setValue(this.editData.position);
      this.jobForm.controls['companyname'].setValue(this.editData.companyname);
      this.jobForm.controls['role'].setValue(this.editData.role);
      this.jobForm.controls['salary'].setValue(this.editData.salary);
      this.jobForm.controls['location'].setValue(this.editData.location);
      this.jobForm.controls['skillsrequired'].setValue(this.editData.skillsrequired);
      this.jobForm.controls['criteria'].setValue(this.editData.criteria);
    }
  }

  addJob() {
    if (!this.editData) {
      if (this.jobForm.valid) {
        this.apiService.postJob(this.jobForm.value).subscribe(resp => {
          
          this.toast.success({ detail: "Added!", summary: "Job Added Successfully!!!", duration: 3000 });
          this.jobForm.reset();
          this.dialogRef.close('save');
        },
          error => this.toast.error({ detail: "Error!", summary: "Error While Adding The Job!!", duration: 4000 })); // alert("Error While Adding The Product!!"));
     }
    }
    else {
      this.updateJob()
    }
  }
  updateJob() {
    this.apiService.putJob(this.jobForm.value, this.editData.id)
      .subscribe(resp => {
       this.toast.success({ detail: "Updated!", summary: "Job Updated Successfully!!!", duration: 3000 });
        this.jobForm.reset();
        this.dialogRef.close('update');
      },
        
      error =>  this.toast.error({ detail: "Error!", summary: "Error While Updating The Job!!", duration: 4000 }));
    }
}
