
import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allownewserver=false;

  servercreationstatus="not created";

  servername='testserver';

  servercreated=false;

  servers=['testserver', 'testserver2'];

  constructor(){
    setTimeout(()=>{
      this.allownewserver=true;
    },2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.servercreated=true;
    this.servers.push(this.servername);
    this.servercreationstatus="server created with server name "+this.servername;
   
  }

  onupdateservername(event:Event){
console.log(event);
this.servername=(<HTMLInputElement>event.target).value;
  }

}
