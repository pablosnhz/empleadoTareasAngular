import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';


@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit{

  // randomResults: Results | undefined;

  // mandamos este input al random contactpage y lo recibe mediante un input
  @Input() randomContact: IRandomContact | undefined;

  constructor(  ){}

  ngOnInit(): void {
  }
}
