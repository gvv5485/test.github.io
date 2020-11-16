import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-modify-contact',
  templateUrl: './modify-contact.component.html',
  styleUrls: ['./modify-contact.component.css']
})
export class ModifyContactComponent implements OnInit {

   conn: Contact = new Contact();
  constructor(private service : ContactServiceService) { 
  }

  ngOnInit(): void {
  }

  ModifyContact(conn : Contact){


    alert(JSON.stringify(this.conn));
    this.service.ModifyContact(this.conn).subscribe(data =>{ 
      alert(JSON.stringify(data))
      alert(data);
      console.groupCollapsed(data);
      if(data != null) {
        alert("Modified Successfully");
    console.log(conn);
    // this.service.ModifyContact(conn.contactName); 
      }
  });
}
  // ModifyContact(contactid : string){


    // alert(JSON.stringify(this.contactid));
    // this.service.ModifyContact(this.conn).subscribe(data =>{ 
    //   alert(JSON.stringify(data))
    //   alert(data);
    //   console.groupCollapsed(data);
    //   if(data != null) {
    //     alert("Modified Successfully");
    //   }
    // });
  // }

}