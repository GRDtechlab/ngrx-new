import { Injectable } from '@angular/core';
import { tickdata,tickdataTwo } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  ticketData: tickdata[] = [
    {
      raceid: 1,
      race: 'Aladdin 4K Run',
      quan: 0,
      amount: 599,
      imageSrc: 'https://picsum.photos/id/944/900/500',
    },
    {
      raceid: 2,
      race: 'Mowgli 2K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://picsum.photos/id/1011/900/500',
    },
    {
      raceid: 3,
      race: 'Chota Bheem 1K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://picsum.photos/id/984/900/500',
    },
    {
      raceid: 4,
      race: 'Aladdin 4K Run',
      quan: 0,
      amount: 599,
      imageSrc: 'https://picsum.photos/id/944/900/500',
     
    },
    {
      raceid: 5,
      race: 'Mowgli 2K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://picsum.photos/id/1011/900/500',
     
    },
    {
      raceid: 6,
      race: 'Chota Bheem 1K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://picsum.photos/id/984/900/500',
     
    },
  ];
  ticketDataTwo: tickdataTwo[] = [
    {
      raceid: 7,
      race: 'DBZ 4K Run',
      quan: 0,
      amount: 799,
      imageSrc: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
    },
    {
      raceid: 8,
      race: 'OP 2K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
    },
    {
      raceid: 9,
      race: 'NRT 1K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60',
    },
    {
      raceid: 10,
      race: 'Aladdin 4K Run',
      quan: 0,
      amount: 599,
      imageSrc: 'https://picsum.photos/id/944/900/500',
     
    },
    {
      raceid: 11,
      race: 'Mowgli 2K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://picsum.photos/id/1011/900/500',
     
    },
    {
      raceid: 12,
      race: 'Chota Bheem 1K Run',
      quan: 0,
      amount: 499,
      imageSrc: 'https://picsum.photos/id/984/900/500',
     
    },
  ];
  eventDetail: any[] = [
    {
      raceid: 1,
      imageSrc: 'https://picsum.photos/id/944/900/500',
      eventInfo:'What can be more exciting than participating along with your mom and dad in a virtual marathon?',
      date: '7 May - 15 May 2022',
      time: '5:30 AM (IST)',
      registration: 'Free',
      rules: ['1. Run inside your home or outside as per your convenience and government guidelines on any one day from 7 May - 15 May 2022 to get qualified for Super Mom Run-Ride 2022',
       '2. Run with App / Watch to track your run and submit a screenshot of the distance covered on WhatsApp Number with the name of the event, booking id, and your name: 7728849872',
        '3. Data can be submitted on a given WhatsApp number till 16 May 2022 by 11 AM.',
      '4. Data submission is MANDATORY (Strictly No Exception allowed)',
    '5. Once you finish your run, you have to click a screenshot of the app you are using to calculate your distance. You need to submit this screenshot as proof of the distance you covered on the WhatsApp number provided.',
  '6. You can use any App Garmin, Strava, RunKeeper, Nike Running, Runtastic, or whichever app you are using for running on your mobile.'
  ],
      attraction: ['Medal', 'E- Certificate', 'T-shirt','Facebook Flyers'],
      notes: ['Tickets are non-refundable & non-transferable.',
       'Takeaways (Medal, E certificate, T-Shirt) will be delivered according to your selected ticket only.',
        'The Certificate will be sent to you within the first week of the virtual run.',
      'Medals, t-shirts, and other goodies will be dispatched within 2 - 3 weeks after the event.'],
    },
    {
      raceid: 2,
      imageSrc: 'https://picsum.photos/id/1011/900/500',
      eventInfo:
        'Second Event info. This event is basically designed accordigly your requirement. ',
      date: '15 May - 20 May 2022',
      time: '8:30 AM (IST)',
      registration: 'Free',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      attraction: ['Attraction 1', 'Attraction 2', 'Attraction 3'],
      notes: ['Notes 1', 'Notes 2', 'Notes 3'],
    },
    {
      raceid: 3,
      imageSrc: 'https://picsum.photos/id/984/900/500',
      eventInfo:
        'Third Event info. This event is basically designed accordigly your requirement. ',
      date: '1 May - 10 May 2022',
      time: '10:30 AM (IST)',
      registration: 'Free',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      attraction: ['Attraction 1', 'Attraction 2', 'Attraction 3'],
      notes: ['Notes 1', 'Notes 2', 'Notes 3'],
    },
    {
      raceid: 4,
      imageSrc: 'https://picsum.photos/id/944/900/500',
      eventInfo:
        'Fourth Event info. This event is basically designed accordigly your requirement. ',
      date: '12 May - 18 May 2022',
      time: '6:30 AM (IST)',
      registration: 'Free',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      attraction: ['Attraction 1', 'Attraction 2', 'Attraction 3'],
      notes: ['Notes 1', 'Notes 2', 'Notes 3'],
    },
  ];

  eventDetailTwo: any[] = [
    {
      raceid: 7,
      imageSrc: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
      eventInfo:'What can be more exciting than participating along with your mom and dad in a virtual marathon?',
      date: '7 May - 15 May 2022',
      time: '5:30 AM (IST)',
      registration: 'Free',
      rules: ['1. Run inside your home or outside as per your convenience and government guidelines on any one day from 7 May - 15 May 2022 to get qualified for Super Mom Run-Ride 2022',
       '2. Run with App / Watch to track your run and submit a screenshot of the distance covered on WhatsApp Number with the name of the event, booking id, and your name: 7728849872',
        '3. Data can be submitted on a given WhatsApp number till 16 May 2022 by 11 AM.',
      '4. Data submission is MANDATORY (Strictly No Exception allowed)',
    '5. Once you finish your run, you have to click a screenshot of the app you are using to calculate your distance. You need to submit this screenshot as proof of the distance you covered on the WhatsApp number provided.',
  '6. You can use any App Garmin, Strava, RunKeeper, Nike Running, Runtastic, or whichever app you are using for running on your mobile.'
  ],
      attraction: ['Medal', 'E- Certificate', 'T-shirt','Facebook Flyers'],
      notes: ['Tickets are non-refundable & non-transferable.',
       'Takeaways (Medal, E certificate, T-Shirt) will be delivered according to your selected ticket only.',
        'The Certificate will be sent to you within the first week of the virtual run.',
      'Medals, t-shirts, and other goodies will be dispatched within 2 - 3 weeks after the event.'],
    },
    {
      raceid: 8,
      imageSrc: 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
      eventInfo:
        'Second Event info. This event is basically designed accordigly your requirement. ',
      date: '15 May - 20 May 2022',
      time: '8:30 AM (IST)',
      registration: 'Free',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      attraction: ['Attraction 1', 'Attraction 2', 'Attraction 3'],
      notes: ['Notes 1', 'Notes 2', 'Notes 3'],
    },
    {
      raceid: 9,
      imageSrc: 'https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60',
      eventInfo:
        'Third Event info. This event is basically designed accordigly your requirement. ',
      date: '1 May - 10 May 2022',
      time: '10:30 AM (IST)',
      registration: 'Free',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      attraction: ['Attraction 1', 'Attraction 2', 'Attraction 3'],
      notes: ['Notes 1', 'Notes 2', 'Notes 3'],
    },
    {
      raceid: 10,
      imageSrc: 'https://picsum.photos/id/944/900/500',
      eventInfo:
        'Fourth Event info. This event is basically designed accordigly your requirement. ',
      date: '12 May - 18 May 2022',
      time: '6:30 AM (IST)',
      registration: 'Free',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      attraction: ['Attraction 1', 'Attraction 2', 'Attraction 3'],
      notes: ['Notes 1', 'Notes 2', 'Notes 3'],
    },
  ];


  constructor() { }

  getEventDetailData(eventId: any) {
    console.log({ eventId });
    return this.eventDetail.find((eventData) => eventData.raceid === eventId);
  }

  getEventDetailDataTwo(eventId: any) {
    console.log({ eventId });
    return this.eventDetailTwo.find((eventDataTwo) => eventDataTwo.raceid === eventId);
  }
}
