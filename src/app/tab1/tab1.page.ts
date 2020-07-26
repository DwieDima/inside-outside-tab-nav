import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(
    private navController: NavController,
    private route: ActivatedRoute
  ) {}

  onNavigateInsideTabs() {
    this.navController.navigateForward(["inside"], { relativeTo: this.route });
  }

  onNavigateOutsideTabs() {
    this.navController.navigateForward(["outside"]);
  }
}
