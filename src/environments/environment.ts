// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyC3PymPj7wvRyxH5ntHtkWQRi-q8CQ-KsM',
    authDomain: 'shiksha-26ead.firebaseapp.com',
    databaseURL: 'https://shiksha-26ead.firebaseio.com',
    projectId: 'shiksha-26ead',
    storageBucket: '',
    messagingSenderId: '609531962538'
  },
  apiUrl: 'http://localhost:4000'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
