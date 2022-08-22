import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  postJob(data: any){
    return this.httpClient.post<any>("http://localhost:8080/api/job/",data);
  }

  getJob(){
    return this.httpClient.get<any>("http://localhost:8080/api/jobs/");
  }

  getJobById(id : number){
    return this.httpClient.get<any>("http://localhost:8080/api/jobs/"+id);
  }

  putJob(data: any, id : number){
    return this.httpClient.put<any>("http://localhost:8080/api/updatejob/"+id,data);
  }
  deleteJob(id:any){
    return this.httpClient.delete<any>("http://localhost:8080/api/deletejob/"+id);
  }
}
