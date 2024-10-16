import { Component } from '@angular/core';
import {
  faBox,
  faLocation,
  faMoneyBill,
  faShop,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css'],
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBox;
  faMoneyBill = faMoneyBill;
}
