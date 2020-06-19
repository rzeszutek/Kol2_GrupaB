import { Component, OnInit } from '@angular/core';
import {RRDataService} from "../../services/rr-data.service";

@Component({
  selector: '',
  templateUrl: './rr-forum.component.html',
  styleUrls: ['./rr-forum.component.css']
})
export class RRForumComponent implements OnInit {

  public data$: any;

  constructor(private service: RRDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getPosts().subscribe(data => { this.data$ = data});
  }
}
