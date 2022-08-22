import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';


export interface JobList {
  id: number;
  position : string;
  companyname : string;
  role : string;
  salary : string;
  location : string;
  skillsrequired : string;
  criteria : string;
}




@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})


export class JobsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'companyname', 'role', 'salary', 'location', 'skillsrequired', 'criteria', 'actions'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(public dialog: MatDialog, private apiService: ApiService,
     private router: Router, private toast: NgToastService) {
    
  }

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

  about(){
    this.router.navigate(['about']);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '30%'
    }).afterClosed().subscribe(val =>{
      if(val==='save'){
        this.getAllJobs();
      }
    })

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

  editJob(row:any){
    this.dialog.open(DialogComponent,{
      width: '30%',
      data: row
    }).afterClosed().subscribe(val =>{
      if(val ==='update'){
        this.getAllJobs();
      }
    })   
  }

  deleteJob(id:number){
    this.apiService.deleteJob(id).subscribe(resp =>{
     // alert("Job Deleted Successfully!!!");
     this.toast.success({detail:"Deleted!",summary:"Job Deleted Successfully!!!",duration:3000});
      this.getAllJobs();
    },
   // error => alert("Error While Deleting the Job"));
  error => this.toast.error({detail:"Error!",summary:"Error While Deleting the Job!!!",duration:3000}));
  }

  logout(){
    this.toast.success({detail:'Logged out!',summary:"You have Successfully Logged out!!!",duration:3000})
    this.router.navigate(['login']);
    localStorage.clear();//to entirely clear local storage
  }
}
