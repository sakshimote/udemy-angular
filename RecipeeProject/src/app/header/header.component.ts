import { Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private dataStorageService:DataStorageService){};


//  @Output('featureSelected') featureSelected=new EventEmitter<string>;

//   onSelect(feature:string){
//     this.featureSelected.emit(feature);
//   }

onSaveData(){
this.dataStorageService.storeRecipees();
}

onFetchData(){

  console.log('fetching data');

  this.dataStorageService.fetchRecipees();

}


}
