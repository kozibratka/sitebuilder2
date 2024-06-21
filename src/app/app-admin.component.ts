import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app-admin.component.html',
  styleUrl: './app-admin.component.css'
})
export class AppAdminComponent {
  title = 'my-app';
}
