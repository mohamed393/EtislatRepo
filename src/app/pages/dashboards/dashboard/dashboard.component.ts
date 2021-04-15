import {Component, OnInit} from '@angular/core';
import {monthlyEarningChart, transactions} from './data';
import {ChartType} from './dashboard.model';
import {User} from 'src/app/core/models/auth.models';
import {NotificationService} from 'src/app/core/services/notification.service';
import {UserNotification} from 'src/app/core/models/notification.models';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../../../../environments/environment';
import {CookiesService} from '../../../core/services/cookies.service';
import {DashboardService} from './dashboard.service';

export enum PeriodType {
  Month = 1,
  Year = 2,
}

@Component({
  selector: 'app-default',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  periodType = PeriodType;
  testsBarChart: ChartType;
  host: string = environment.HOST + 'uploads/uploads/';
  monthlyEarningChart: ChartType;
  transactions;
  lang: string;
  dashboardData: any;
  testStats: any;
  trials: any;

  onboardingData = {
    idScan: false,
    image: '',
    faceScan: true,
    knuckleScan: false,
  };

  studentTestChart: ChartType = {
    series: [56, 38, 26],
    chart: {
      type: 'donut',
      height: 240,
    },
    labels: ['Uploaded', 'Uploaded Failed', 'Not Attempted'],
    colors: ['#556ee6', '#f46a6a', '#34c38f'],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
  };

  user: User;
  selectedPeriodtype: PeriodType = PeriodType.Month;
  notifications: UserNotification[];
  tableConfig = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    startIndex: 0,
    endIndex: 10,
    totalRecords: 0,
  };

  notificationConfig = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    startIndex: 0,
    endIndex: 10,
    totalRecords: 0,
  };

  constructor(
    private dashboardService: DashboardService,
    private notificationService: NotificationService,
    private cookieService: CookiesService,
    private modalService: NgbModal,
    private router: Router
  ) {

    // this.notifications = this.notificationService.notifications;
    // this.notificationConfig.totalRecords = this.notificationService.count;
    // this.dashboardData = this.dashboardService.dashboardData;
    // this.trials = this.dashboardService.trials;
    // this.testStats = this.dashboardService.testState;
    //
    // console.log(this.dashboardService.testBarChart);
    // this.testsBarChart = this.dashboardService.testBarChart;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.monthlyEarningChart = monthlyEarningChart;
    this.transactions = transactions;
  }

  successMessage(title: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  deleteModelResult(title: any, message: any, icon: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire(title, message, icon);
  }
  changePeriod(e: Event, type: PeriodType) {
    e.preventDefault();
    this.selectedPeriodtype = type;
    let typo: string;
    if (type === PeriodType.Month) {
      typo = 'month';
    } else {
      typo = 'year';
    }

    this.dashboardService.getTestStatistics(typo).then(() => {
      this.testsBarChart = this.dashboardService.testBarChart;
      console.log(this.testsBarChart);
    });

    // this.emailSentBarChart = getBarChartData([...this.tests], type);
  }

}
