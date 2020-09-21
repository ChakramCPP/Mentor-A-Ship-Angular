import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  public saveMentor(m){

    return this.http.post("http://localhost:8080/mentor/add",m).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public saveAssociate(a){
    console.log(a);
   return this.http.post("http://localhost:8080/associate/add",a).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public saveTask(t){
    console.log(t);
   return this.http.post("http://localhost:8080/task/add",t).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public saveResource(r){
    console.log(r);
   return this.http.post("http://localhost:8080/resource/add",r).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public updateAssociate(a){
    console.log(a);
   return this.http.put("http://localhost:8080/associate/update",a).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public updateMentor(m){
    console.log(m);
   return this.http.put("http://localhost:8080/mentor/update",m).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public updateAdmin(a){
    console.log(a);
   return this.http.put("http://localhost:8080/mentor/update",a).subscribe     (error=> console.log(error),
    data=> console.log(data)
    );
  }
  public mapMentors(mid,asid){
    console.log(mid,asid);
   return this.http.put(`http://localhost:8080/admin/map?mid=${mid}&asid=${asid}`,"map them").subscribe
    (
      error=> {
        console.log(error)
        alert("mapping failed,check the limits of mentor!")
      },
      data=> console.log(data)
    );
  }

  
}
