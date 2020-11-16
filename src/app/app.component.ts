import { Component,OnInit } from '@angular/core';
//import{HttpClient} from '@angular/common/http'
import { ContactServiceService } from './contact-service.service';
import { Contact } from './contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ContactBook';
  data: any;
  conn: Contact = new Contact();
  
  constructor(private service: ContactServiceService){
    this.conn.contactName="";
  }
getContact(){
  // alert(this.conn.contactName);
  this.service.findDepartment(this.conn.contactName)
  .subscribe((data: Contact) => {
      this.conn = data;
 
  });
}

//    constructor(private myhttp:HttpClient)
//  {

//   }
//   ngOnInit()
//    {
  
//    this.myhttp.get('http://localhost:8099/ContactListProject/rest/Contacts').
//     subscribe((dataFromNet)=> this.displayData(dataFromNet));
//    }
//  thisPageGlobalData;
//     displayData(dataFromNet){
//       this.thisPageGlobalData=dataFromNet;
//    }
    
  }

