import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})
export class HeaderComponent  {
  imageSrc: string = 'assets/android-chrome-512x512.png'
  imageSrcTwo: string =  'assets/favicon-32x32.png'

}
