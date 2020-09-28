import { Component, OnInit } from '@angular/core';
import { PostInt } from '../interface/post-int';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  postItems: PostInt[] = [
    {
      title: 'Post 1',
      thought: 'Lorem ipsum'
    },
    {
      title: 'I made another header',
      thought: 'This is the second post'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
