import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/common/login/login.component';
import { RegisterComponent } from '../app/common/register/register.component';
import { AuthGuard } from './guards';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { BannerComponent } from './common/banner/banner.component';
import { BrandComponent } from './common/brand/brand.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { CourseComponent } from './common/course/course.component';
import { FaqComponent } from './common/faq/faq.component';
import { NewsComponent } from './common/news/news.component';
import { OnlineTestComponent } from './common/online-test/online-test.component';
import { StatusComponent } from './common/status/status.component';
import { VideoAndeventsComponent } from './common/video-andevents/video-andevents.component';
import { WhatWeDoComponent } from './common/what-we-do/what-we-do.component';
import { QuizComponent } from './common/quiz/quiz.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { DashboardOverviewComponent } from './common/dashboard-overview/dashboard-overview.component';
import { DashboardReportsComponent } from './common/dashboard-reports/dashboard-reports.component';
import { DashboardExamsComponent } from './common/dashboard-exams/dashboard-exams.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'banner', component: BannerComponent },
    { path: 'brand', component: BrandComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'course', component: CourseComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'news', component: NewsComponent },
    { path: 'onlinetest', component: OnlineTestComponent },
    { path: 'status', component: StatusComponent },
  //  { path: 'testimonals', component: OnlineTestComponent },
    { path: 'video', component: VideoAndeventsComponent },
    { path: 'whatwedo', component: WhatWeDoComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'dashboard', component: DashboardComponent ,
      children: [
        {
          path: 'overview',
          component: DashboardOverviewComponent
        },
        {
          path: 'reports',
          component: DashboardReportsComponent
        },
        {
          path: 'exams',
          component: DashboardExamsComponent
        }
      ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
