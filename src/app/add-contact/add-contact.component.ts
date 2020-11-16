
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  conn: Contact = new Contact();
  data: any;
    constructor(private service : ContactServiceService) { 
      this.conn.contactName ='';
      this.conn.contactNumber='';
     
    }
  
    ngOnInit(): void {
    }
    getAllContacts(){
      this.service.getContacts().subscribe(data =>{
        this.data=data;
    })
    }
    addContacts(){
      // alert(JSON.stringify(this.conn));
      this.service.addContacts(this.conn).subscribe(data =>{ 
        alert(JSON.stringify(data))
        // alert(data);
        this.data= data;
        console.groupCollapsed(data);
        if(data != null) {
          alert("Added Successfully");
         }
      });
      this.getAllContacts();
    }
  
  }
  