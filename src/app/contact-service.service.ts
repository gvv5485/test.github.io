import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  conn: Contact = new Contact();
  constructor(private http:HttpClient) { }
  findDepartment(contactName: String): Observable<Contact> 
  {
    let url =  'http://localhost:8099/ContactListProject/rest/Contacts';
    return this.http.get<Contact>(url +'/'+ contactName);
  }
  
  getContacts(){
let url ='http://localhost:8099/ContactListProject/rest/Contacts';
return this.http.get(url);
  }
  addContacts(contact: Contact){
let url='http://localhost:8099/ContactListProject/rest/Contacts';
return this.http.post(url,contact);
  }
  ModifyContact(contact: Contact){
    let url = 'http://localhost:8099/ContactListProject/rest/Contacts/';
    return this.http.put(url,contact);
  }
  // deleteContact(contactName: String) 
  // {
  //   console.log(contactName);
  //   // console.log(contactName+" deleted success");
  
  //   let url = 'http://localhost:8099/ContactListProject/rest/Contacts/'+contactName+'/';
  //   console.log(url);
  //   // console.log('I am here ')
  //    return this.http.delete(url);  

               
  // }

  deleteContact(contact :Contact ) 
  {
    console.log(contact);
    console.log(contact+" deleted success");
  
    let url = 'http://localhost:8099/ContactListProject/rest/Contacts/'+contact;
    console.log(url);
    // console.log('I am here ')
     return this.http.delete(url);  

               
  }

}
