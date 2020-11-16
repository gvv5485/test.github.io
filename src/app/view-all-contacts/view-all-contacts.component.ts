import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-view-all-contacts',
  templateUrl: './view-all-contacts.component.html',
  styleUrls: ['./view-all-contacts.component.css']
})
export class ViewAllContactsComponent implements OnInit {


  contact: Contact;
  // contactName : String;
  id:String;
  data: any;
  constructor(private service:ContactServiceService,private router:Router){
    
  }
 
  ngOnInit(){
 this.getAllContacts();
}
getAllContacts(){
  this.service.getContacts().subscribe(data =>{
    this.data=data;
})
}
deleteContact(contact : Contact){
  console.log(contact);
// console.log ("I am here ")
  alert(JSON.stringify(contact));
  // console.log("am here as well")
  this.service.deleteContact(contact).subscribe(data =>{ 
    // alert(JSON.stringify(data))
    // alert(data);
    console.groupCollapsed(data);
    if(data != null) {
      alert("Deleted Successfully");
  console.log(data);

  // this.service.deleteContact(contactName); 
};

});

}
}

