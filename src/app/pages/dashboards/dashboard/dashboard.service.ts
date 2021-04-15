import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot,} from '@angular/router';
import {ChartType} from './dashboard.model';

const endPoint = environment.API_ENDPOINT + 'dashboard/';

@Injectable({providedIn: 'root'})
export class DashboardService implements Resolve<any> {
  constructor(private http: HttpClient) {
  }
  dashboardData: any;
  testState: any;
  trials: any;

  testBarChart: ChartType;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getDashboardData(),
        this.getTestStatistics('month'),
        this.getTrialNumbers(),
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  getChartData() {
    this.testBarChart = {
      chart: {
        height: 359,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '15%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Not onboarding Tests',
          data: this.testState.ubBoardingTests,
        },
        {
          name: 'onboarding Tests',
          data: this.testState.boardingTests,
        },
      ],
      xaxis: {
        categories: this.testState.cats,
      },
      colors: ['#556ee6', '#f1b44c'],
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1,
      },
    };
  }

  getDashboardData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(endPoint).subscribe(
        (res: any) => {
          this.dashboardData = res;
          resolve();
        },
        (error: any) => {
          return reject(error);
        }
      );
    });
  }

  getTestStatistics(period: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(endPoint + `/test-stat/${period}`).subscribe(
        (res: any) => {
          this.testState = res;
          this.getChartData();
          resolve(res);
        },
        (error: any) => {
          return reject(error);
        }
      );
    });
  }

  getTrialNumbers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(endPoint + 'trial-numbers').subscribe(
        (res: any) => {
          this.trials = res;
          resolve();
        },
        (error: any) => {
          return reject(error);
        }
      );
    });
  }
}
