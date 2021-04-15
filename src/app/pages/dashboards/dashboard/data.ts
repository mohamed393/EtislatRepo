import {Test} from '../../test/test.model';
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

const getBarChartData = (tests: Test[], type: PeriodType) => {
  let onboardingNumbersV1: number[];
  let notOnboardingNumbersV1: number[];
  let categoriesV1: string[];

  switch (type) {
    case PeriodType.Month:
      const yearOnboardingNumbers: number[] = new Array<number>(12).fill(0);
      const yearNotOnboardingNumbers: number[] = new Array<number>(12).fill(0);
      const mountCategories: string[] = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      categoriesV1 = mountCategories;
      tests.forEach((test) => {
        const index = new Date(test.createdAt).getMonth();
        if (test.onboardingTest) {
          yearOnboardingNumbers[index] = yearOnboardingNumbers[index] + 1;
        } else {
          yearNotOnboardingNumbers[index] = yearNotOnboardingNumbers[index] + 1;
        }
      });

      onboardingNumbersV1 = yearOnboardingNumbers;
      notOnboardingNumbersV1 = yearNotOnboardingNumbers;
      break;
    case PeriodType.Year:
      const years = [];
      tests.forEach((test) => {
        const year = new Date(test.createdAt).getFullYear();
        if (years.indexOf(year) === -1) {
          years.push(year);
        }
      });

      const monthOnboardingNumbers: number[] = new Array<number>(
        years.length
      ).fill(0);

      const monthNotOnboardingNumbers: number[] = new Array<number>(
        years.length
      ).fill(0);

      categoriesV1 = years;

      tests.forEach((test) => {
        const year = new Date(test.createdAt).getFullYear();
        const index = years.indexOf(year);
        if (test.onboardingTest) {
          monthOnboardingNumbers[index] = monthOnboardingNumbers[index] + 1;
        } else {
          monthNotOnboardingNumbers[index] =
            monthNotOnboardingNumbers[index] + 1;
        }
      });
      onboardingNumbersV1 = monthOnboardingNumbers;
      notOnboardingNumbersV1 = monthNotOnboardingNumbers;

      break;
  }

  const emailSentBarChart: ChartType = {
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
        data: notOnboardingNumbersV1,
      },
      {
        name: 'onboarding Tests',
        data: onboardingNumbersV1,
      },
    ],
    xaxis: {
      categories: categoriesV1,
    },
    colors: ['#556ee6', '#f1b44c'],
    legend: {
      position: 'bottom',
    },
    fill: {
      opacity: 1,
    },
  };

  return emailSentBarChart;
};
export {getBarChartData, monthlyEarningChart, transactions, statData};
