import { Component, OnInit } from '@angular/core';
import {RRDataService} from "../../services/rr-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rr-forum-item-details',
  templateUrl: './rr-forum-item-details.component.html',
  styleUrls: ['./rr-forum-item-details.component.css']
})
export class RRForumItemDetailsComponent implements OnInit {

  public id: number
  public title: string;
  public text: string;
  public image: string;

  constructor(private service: RRDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.service.getPostsDetails(id).subscribe(data => {
      this.id = data['id'], this.title = data['title'], this.text = data['text'], this.image = data['image'];
    });

  }
}
