import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleTheme = new FormControl(false);

  constructor(private _renderer: Renderer2) { }

  ngOnInit(): void {
    this.toggleTheme.valueChanges.subscribe(toggleValue => {
      console.log("togle is "+toggleValue);
      if (toggleValue === true) {
       this._renderer.addClass(document.body, 'dark-theme');
       this._renderer.removeClass(document.body, 'light-theme');
      } else {
       this._renderer.addClass(document.body, 'light-theme');
       this._renderer.removeClass(document.body, 'dark-theme');
      }
     });
  }

}
