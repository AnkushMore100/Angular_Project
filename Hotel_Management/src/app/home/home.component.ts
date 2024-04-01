import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  admin(){
 this.router.navigateByUrl("/admin/adminLanding")
      }


  owner(){
    this.router.navigateByUrl('/owner/ownerLanding')
  }
  user(){
    this.router.navigateByUrl("/user/userLanding")
  }

}
