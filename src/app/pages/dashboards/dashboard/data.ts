import {ChartType} from './dashboard.model';

export enum PeriodType {
  Week = 0,
  Month = 1,
  Year = 2,
}

const monthlyEarningChart: ChartType = {
  chart: {
    height: 200,
    type: 'radialBar',
    offsetY: -10,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '13px',
          color: undefined,
          offsetY: 60,
        },
        value: {
          offsetY: 22,
          fontSize: '16px',
          color: undefined,
          formatter: (val) => {
            return val + '%';
          },
        },
      },
    },
  },
  colors: ['#556ee6'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  series: [67],
  labels: ['Series A'],
};

const transactions = [
  {
    id: '#SK2540',
    name: 'Neal Matthews',
    date: '07 Oct, 2019',
    total: '$400',
    status: 'Paid',
    payment: ['fa-cc-mastercard', 'Mastercard'],
    index: 1,
  },
  {
    id: '#SK2541',
    name: 'Jamal Burnett',
    date: '07 Oct, 2019',
    total: '$380',
    status: 'Chargeback',
    payment: ['fa-cc-visa', 'Visa'],
    index: 2,
  },
  {
    id: '#SK2542',
    name: 'Juan Mitchell',
    date: '06 Oct, 2019',
    total: '$384',
    status: 'Paid',
    payment: ['fab fa-cc-paypal', 'Paypal'],
    index: 3,
  },
  {
    id: '#SK2543',
    name: 'Barry Dick',
    date: '05 Oct, 2019',
    total: '$412',
    status: 'Paid',
    payment: ['fa-cc-mastercard', 'Mastercard'],
    index: 4,
  },
  {
    id: '#SK2544',
    name: 'Ronald Taylor',
    date: '04 Oct, 2019',
    total: '$404',
    status: 'Refund',
    payment: ['fa-cc-visa', 'Visa'],
    index: 5,
  },
  {
    id: '#SK2545',
    name: 'Jacob Hunter',
    date: '04 Oct, 2019',
    total: '$392',
    status: 'Paid',
    payment: ['fab fa-cc-paypal', 'Paypal'],
    index: 6,
  },
];

const statData = [
  {
    icon: 'bx bx-copy-alt',
    title: 'dashboard.Orders',
    value: '1,235',
  },
  {
    icon: 'bx bx-archive-in',
    title: 'dashboard.Revenue',
    value: '$35, 723',
  },
  {
    icon: 'bx bx-purchase-tag-alt',
    title: 'dashboard.AveragePrice',
    value: '$16.2',
  },
];

export {monthlyEarningChart, transactions, statData};
