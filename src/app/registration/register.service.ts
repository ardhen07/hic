import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl:string = "http://localhost:8080/hic";

  constructor(private http: HttpClient) { }

  goto_Save(){
    return this.http.post(this.baseUrl+'/saveuser', {
    
      id: 4,
      fullname: 'Sanjeet',
      phno: '12347586',
      emailid: 'san@gmail.com',
      passwood: '0123456789',
      pin: '1234',
      imagepath: 'string',
      createdDate: '2019-09-04T06:44:48.222+0000'
  
  });
    }
  
}
