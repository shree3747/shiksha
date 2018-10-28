import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BannerComponent } from './common/banner/banner.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { FaqComponent } from './common/faq/faq.component';
import { OnlineTestComponent } from './common/online-test/online-test.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { RegisterEditComponent } from './common/register/register-edit/register-edit.component';
import { TopHeaderComponent } from './common/header/top-header/top-header.component';
import { MiddleHeaderComponent } from './common/header/middle-header/middle-header.component';
import { StatusComponent } from './common/status/status.component';
import { CourseComponent } from './common/course/course.component';
import { WhatWeDoComponent } from './common/what-we-do/what-we-do.component';
import { VideoAndeventsComponent } from './common/video-andevents/video-andevents.component';
import { TestimonialsComponent } from './common/testimonials/testimonials.component';
import { NewsComponent } from './common/news/news.component';
import { BrandComponent } from './common/brand/brand.component';
import { SocialIconsComponent } from './common/footer/social-icons/social-icons.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RegisterDetailsComponent } from './common/register/register-details/register-details.component';
import { RegisterCreateComponent } from './common/register/register-create/register-create.component';
import { RegisterDeleteComponent } from './common/register/register-delete/register-delete.component';
import { AuthGuard } from './guards';
import { AuthenticationService, AlertService, UserService } from './services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from './common/helpers';
// used to create fake backend
import { fakeBackendProvider } from './common/helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.route';
import { AlertComponent } from './directives';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './common/password/password.component';
import { CreatePasswordComponent } from './common/password/create-password/create-password.component';
import { ForgotPasswordComponent } from './common/password/forgot-password/forgot-password.component';
import { QuizComponent } from './common/quiz/quiz.component';
import { NavigationComponent } from './common/banner/navigation/navigation.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { DashboardSidebarComponent } from './common/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './common/dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FaqComponent,
    OnlineTestComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterEditComponent,
    TopHeaderComponent,
    MiddleHeaderComponent,
    StatusComponent,
    CourseComponent,
    WhatWeDoComponent,
    VideoAndeventsComponent,
    TestimonialsComponent,
    NewsComponent,
    BrandComponent,
    SocialIconsComponent,
    RegisterDetailsComponent,
    RegisterCreateComponent,
    RegisterDeleteComponent,
    PasswordComponent,
    CreatePasswordComponent,
    ForgotPasswordComponent,
    QuizComponent,
    NavigationComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
