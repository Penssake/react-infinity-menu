export const data = [
  {
    id: 0,
    icon: '',
    title: 'MY SCHEDULE & BIDDING',
    children: [
      {id: 9, title: 'Schedule', url: '/schedule'},
      {id: 10, title: 'Bidding', url: '/bidding'},
    ],
  },
  {
    id: 1,
    icon: '',
    title: 'SAFETY',
    children: [
      {title: 'Reporting', children: [
        {id: 11, title: '', url: '/safety/report'},
        {id: 12, title: '', url: '/safety/asap-report'},
        {id: 13, title: '', url: '/safety/general'},
        {id: 14, title: '', url: '/safety/flight-attendant-incident'},
      ]},
      {title: 'Agriculture and Customs', children: [
        {id: 15, title: 'Product Safety Data Search', url: '/safety/data-search'}]},
      {id: 16, title: 'Known Crewmember', url: '/safety/known-cremember'},
      {id: 17, title: 'Product Safety Data Search', url: '/safety/data-search'},
    ],
  },
  {
    id: 2,
    icon: '',
    title: 'TRAINING',
    url: '/training',
  },
  {
    id: 3,
    icon: '',
    title: 'ADMINISTRATION',
    children: [
      {id: 18, title: 'OJI and Leaves', chlidren: [
        {id: 19, title: 'OJI', url: '/admin/oji'},
        {id: 20, title: 'Leaves', url: '/admin/leaves'},
      ]},
      {id: 21, title: 'Pay and Benefits', chlidren: [
        {id: 22, title: 'Pay', url: '/pay'},
        {id: 23, title: 'PTO', url: '/pto'},
      ]},
      {id: 24, title: 'Performance', chlidren: [
        {id: 25, title: 'Yearly', url: '/performance/yearly'},
        {id: 26, title: 'Reviews', url: '/performance/reviews'},
      ]},
      {id: 27, title: 'Inflight Resource Directory', url: '/admin/inflight-resource'},
      {id: 28, title: 'Mobile and Web', chlidren: [
        {id: 29, title: 'Mobile', url: '/mobile'},
        {id: 30, title: 'Web', url: '/web'},
      ]},
      {id: 31, title: 'AFA', url: '/admin/afa'},
    ],
  },
  {
    id: 4,
    icon: '',
    title: 'CATERING & BRAND',
    children: [
      {id: 32, title: 'Catering', url: '/catering'},
      {id: 33, title: 'Brand', url: '/brand'},
    ],
  },
  {
    id: 5,
    icon: '',
    title: 'HOTELS',
    url: '/hotels',
  },
  {
    id: 6,
    icon: '',
    title: 'MY BASE',
    url: '/homebase',
  },
  {
    id: 7,
    icon: '',
    title: 'RECOGNITION',
    url: '/recognition',
  },
  {
    id: 8,
    icon: '',
    title: 'MY LEADERSHIP TEAM',
    url: '/leadership-team',
  },
]