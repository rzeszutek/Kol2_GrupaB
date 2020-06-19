import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rr-forum-item',
  templateUrl: './rr-forum-item.component.html',
  styleUrls: ['./rr-forum-item.component.css']
})
export class RRForumItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

  getIndex(id: number) {
    return id;
  }
}
