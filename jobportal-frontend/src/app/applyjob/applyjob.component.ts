import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';
import {TableService} from '../table.service';
import { JobsappliedComponent } from '../jobsapplied/jobsapplied.component';

export interface JobList {
 // id: string;
  position : string;
  companyname : string;
  role : string;
  salary : string;
  location : string;
  skillsrequired : string;
  criteria : string;

}



@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {

  displayedColumns: string[] = ['position', 'companyname', 'role', 'salary', 'location', 'skillsrequired', 'criteria', 'actions'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog, private apiService: ApiService,
    private router: Router, private toast: NgToastService, private tableService: TableService) { }

    @ViewChild(JobsappliedComponent, {static: true}) jobview !: JobsappliedComponent

    data !: "hello";

  ngOnInit(): void {
    this.getAllJobs()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllJobs(){
    this.apiService.getJob().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
  //  error => alert("Error While Fetching Data"));
  error => this.toast.error({detail:"Error!",summary:"Error While Fetching Data!!",duration:5000}));
  }
  applyJob(row: any){

  // console.log(row);
  this.jobview.loadjob(row);
  // this.tableService.dataRow = row;
  // this.router.navigate(['appliedjobs']);
  }

}
