import {Component, OnInit} from '@angular/core';
import {AbstractPlugin} from "../../../shared/abstract-class/abstract-plugin";
import {IconConfigInterface} from "../../interfaces/icon-config-interface";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCoffee, faIcons} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent extends AbstractPlugin<IconConfigInterface> implements OnInit{
  faCoffee = faIcons;

  ngOnInit(): void {
    console.log(this.faCoffee)
    this.faCoffee.iconName = 'hooli';
  }
  refreshView(): void {
  }
}
