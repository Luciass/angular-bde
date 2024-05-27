import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./test/test.component";
import {MemberComponent} from "./member/member.component";
import {AccountComponent} from "./account/account.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {MailboxComponent} from "./mailbox/mailbox.component";
import {NewsComponent} from "./news/news.component";
import {ReportComponent} from "./report/report.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'member', component: MemberComponent},
  {path: 'account', component: AccountComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'mailbox', component: MailboxComponent},
  {path: 'news', component: NewsComponent},
  {path: 'report', component: ReportComponent}
];
