import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  data:object[];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getData()
    .subscribe(result => this.data = result.json() );
  }

  removeuser(index){
    this.data.splice(index, 1);
  }

}
