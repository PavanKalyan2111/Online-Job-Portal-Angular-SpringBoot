import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-jobsapplied',
  templateUrl: './jobsapplied.component.html',
  styleUrls: ['./jobsapplied.component.css']
})
export class JobsappliedComponent implements OnInit {

    displayedColumns: string[] = ['position', 'companyname', 'role', 'salary', 'location', 'skillsrequired', 'criteria', 'actions'];
    dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog, private apiService: ApiService,
    private router: Router, private toast: NgToastService, private route: ActivatedRoute) { }

    id: any;
    row !: any;

  ngOnInit(): void {
 this.getAllJobs(this.id)
  }

  loadjob(row:any){
    
    console.log(row);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllJobs(id: number){

     this.apiService.getJob().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 

    },
  //  error => alert("Error While Fetching Data"));
  error => this.toast.error({detail:"Error!",summary:"Error While Fetching Data!!",duration:5000}));
  
  }
 


}
