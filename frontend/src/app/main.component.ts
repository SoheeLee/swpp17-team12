import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

import {UserService} from "./model/user.service";
import {User} from "./model/user";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {
  constructor(
    private router : Router,
    private userService : UserService) {}

  ngOnInit(): void {}

}
