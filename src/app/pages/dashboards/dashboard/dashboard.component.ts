import {Component, OnInit} from '@angular/core';
import {monthlyEarningChart, transactions} from './data';
import {ChartType} from './dashboard.model';
import {TestService} from '../../test/test.service';
import {User} from 'src/app/core/models/auth.models';
import {Test} from '../../test/test.model';
import {NotificationService} from 'src/app/core/services/notification.service';
import {UserNotification} from 'src/app/core/models/notification.models';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {QuestionsType} from '../../questions/questions-Type/questions-type.model';
import {QuestionsTypeService} from '../../questions/questions-Type/questions-type.service';
import {environment} from '../../../../environments/environment';
import {CookiesService} from '../../../core/services/cookies.service';
import {AccountService} from '../../users/account/account.service';
import {Account} from '../../users/account/accounts.model';
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

  types: QuestionsType[] = [];
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
  tests: Test[];
  selectedAccount: Account;
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
    private testService: TestService,
    private accountService: AccountService,
    private notificationService: NotificationService,
    private cookieService: CookiesService,
    private questionTypesService: QuestionsTypeService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.tests = this.testService.tests;
   // this.accountService.getAll({});

    this.notifications = this.notificationService.notifications;
    this.notificationConfig.totalRecords = this.notificationService.count;
    this.tableConfig.totalRecords = this.testService.count;
    this.dashboardData = this.dashboardService.dashboardData;
    this.trials = this.dashboardService.trials;
    this.testStats = this.dashboardService.testState;

    console.log(this.dashboardService.testBarChart);
    this.testsBarChart = this.dashboardService.testBarChart;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.onboardingData.image = Array.isArray(this.user.faceImages)
      ? this.user.faceImages[0]
      : '';
    if (this.user.scanProcessDate) {
      this.user.scanProcessDate = new Date(this.user.scanProcessDate);
      const year = this.user.scanProcessDate.getFullYear() + 1;
      this.user.scanProcessEndDate = new Date();
      this.user.scanProcessEndDate.setFullYear(year);
    }

    this.fetchData();
  }

  updatePublish(test: Test, index) {
    this.testService.update({published: !test.published}, test.id).subscribe(
      (response) => {
        this.tests[index].published = !test.published;
        this.successMessage('Your Test has been Updated.');
      },
      (error) => {
        this.deleteModelResult('Cancelled', error, 'error');
      }
    );
  }

  currentSlide(event) {
    if (event.current == 1) {
      this.onboardingData.faceScan = true;
      this.onboardingData.knuckleScan = false;
      this.onboardingData.idScan = false;
      this.onboardingData.image = Array.isArray(this.user.faceImages)
        ? this.user.faceImages[0]
        : '';
    } else if (event.current == 2) {
      this.onboardingData.faceScan = false;
      this.onboardingData.knuckleScan = true;
      this.onboardingData.idScan = false;
      this.onboardingData.image = Array.isArray(this.user.knuckleImages)
        ? this.user.knuckleImages[0]
        : '';
    } else {
      this.onboardingData.faceScan = false;
      this.onboardingData.knuckleScan = false;
      this.onboardingData.idScan = true;
      this.onboardingData.image = Array.isArray(this.user.idImages)
        ? this.user.idImages[0]
        : '';
    }
  }

  onEditClick(type: any, test, modal) {
    this.router.navigate(['/tests/add-question/' + test], {
      queryParams: {type},
    });
    modal.close('');
  }

  openModal(content?) {
    this.questionTypesService.getAll({}).then((response) => {
      this.types = response.types;
    });
    this.modalService.open(content);
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

  expired(test: Test) {
    const date = new Date();
    if (date.getTime() > new Date(test.closes).getTime()) {
      return true;
    }
  }

  upcommingTest(test: Test) {
    const date = new Date();
    if (date.getTime() < new Date(test.opens).getTime()) {
      return true;
    }
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

  filtertests() {
    const query = {
      limit: this.tableConfig.pageSize,
      page: this.tableConfig.page,
    };
    this.testService.getAll(query).then((response) => {
      this.tests = response.tests;
      this.tableConfig.totalRecords = response.count;
    });
  }
}
