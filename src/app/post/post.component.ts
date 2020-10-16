import { Component, OnInit } from '@angular/core';
import { M3oService } from '../m3o.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Object;

  constructor(private m3o: M3oService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const that = this
    this.route.paramMap.subscribe((paramMap) => {
      that.m3o
        .get(
          'posts',
          'query',
          new HttpParams({
            fromObject: {
              slug: paramMap.get('slug'),
            },
          })
        )
        .then((v) => {
          that.post = v['posts'][0];
        });
    });
  }
}
