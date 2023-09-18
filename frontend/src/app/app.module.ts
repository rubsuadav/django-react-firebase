import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule as routing } from "./app-routing.module";
import { AppComponent as app } from "./app.component";
import { ListPostComponent as list } from "./list-post/list-post.component";
import { HttpClientModule } from "@angular/common/http";
import { CreatePostComponent as create } from "./create-post/create-post.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [app, list, create],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [app],
})
export class AppModule {}
