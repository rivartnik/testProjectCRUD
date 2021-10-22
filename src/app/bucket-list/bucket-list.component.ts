import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/services/api.service";
import {Bucket} from "../shared/interfaces/bucket";

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {
  buckets:Array<Bucket>=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBuckets().subscribe((data:any) => {
      this.buckets = data;
    })
  }

}
