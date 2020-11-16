import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {

  conn: Contact = new Contact();
  constructor(private service : ContactServiceService) { 
  }

  ngOnInit(): void {
  }
  DeleteContact(){
    alert(JSON.stringify(this.conn));
    this.service.deleteContact(this.conn).subscribe(data =>{ 
      alert(JSON.stringify(data))
      alert(data);
      console.groupCollapsed(data);
      if(data != null) {
        alert("Deleted Successfully");
      }
    });
  }

}
