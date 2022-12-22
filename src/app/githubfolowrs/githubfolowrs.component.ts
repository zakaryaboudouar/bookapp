import { Component, OnInit } from '@angular/core';
import { GithubfolowrsService } from '../services/githubfolowrs.service';

@Component({
  selector: 'app-githubfolowrs',
  templateUrl: './githubfolowrs.component.html',
  styleUrls: ['./githubfolowrs.component.css']
})
export class GithubfolowrsComponent implements OnInit {

 data:any[]=[];

  constructor(private githubfolowrsService:GithubfolowrsService) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.githubfolowrsService.getAll().subscribe(response=>{
      this.data = response;
    })
  }
}
