import { Component} from '@angular/core';
import { loggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  providers:[loggingService]
})
export class NewAccountComponent {

  constructor(private loggingService:loggingService,
    private accountsService:AccountsService){

      this.accountsService.statusUpdated.subscribe((status:string)=>alert('new status: '+status));
    }



    onCreateAccount(accountName:string,accountStatus:string){

      this.accountsService.addAccount(accountName,accountStatus);
     
    }


  
    



}
 









