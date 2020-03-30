import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesService } from './service/articles.service';
import { ParametresService } from './service/parametres.service';
import { UserService } from './service/user.service';
import { CommentairesService } from './service/commentaires.service';


import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticlesComponent } from './front/articles/articles.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { ListeComponent } from './back/articles/liste/liste.component';
import { AjouterComponent } from './back/articles/ajouter/ajouter.component';
import { ParametresComponent } from './back/parametres/parametres.component';
import { ListeParamComponent } from './back/parametres/liste-param/liste-param.component';
import { UserComponent } from './back/user/user.component';
import { ListeUserComponent } from './back/user/liste-user/liste-user.component';
import { AjouterUserComponent } from './back/user/ajouter-user/ajouter-user.component';
import { FormComponent } from './back/parametres/form/form.component';
import { CommentairesComponent } from './front/articles/commentaires/commentaires.component';
import { ModifierComponent } from './back/articles/modifier/modifier.component';
import { ModifUserComponent } from './back/user/modif-user/modif-user.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticlesComponent,
    NotFoundComponent,
    DashboardComponent,
    MenuDashboardComponent,
    ListeComponent,
    AjouterComponent,
    ParametresComponent,
    ListeParamComponent,
    UserComponent,
    ListeUserComponent,
    AjouterUserComponent,
    FormComponent,
    CommentairesComponent,
    ModifierComponent,
    ModifUserComponent



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: "" , component: AccueilComponent },
        { path: "articles/:id" , component: ArticlesComponent },
        { path: "admin/articles/liste" , component: ListeComponent },
        {path:"admin/articles/ajouter" , component: AjouterComponent},
        {path:"admin/articles/modifier" , component: ModifierComponent},
        { path: "user/:id" , component: UserComponent },
        { path: "admin/user/liste-user" , component: ListeUserComponent },
        { path: "admin/liste-user" , component: ListeUserComponent },
        { path: "liste-user/:id" , component: ListeUserComponent },
        {path:"admin/user/ajouter" , component: AjouterUserComponent },
        {path:"admin/user/modifier" , component: ModifUserComponent },
        { path: "admin/parametres/liste-param" , component: ListeParamComponent },
        { path: "admin/parametres/form" , component: FormComponent },
        { path: "commentaires/:id" , component: CommentairesComponent},
        { path: "admin" , component: DashboardComponent },
        { path: "**" , component: NotFoundComponent}
      ]
    ),
    HttpClientModule
  ],
  providers: [ArticlesService, ParametresService, UserService, CommentairesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
