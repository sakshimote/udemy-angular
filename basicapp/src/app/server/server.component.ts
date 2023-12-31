import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl: './server.component.html'

})


export class ServerComponent{
    serverId:number=1;
    serverStatus:string="offline";
    
    constructor(){
        this.serverStatus=Math.random()>0.5?'offline':'online';

    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus=='online'?"green":"red";
    }
}