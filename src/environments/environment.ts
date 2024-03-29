// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl:'http://localhost:8080',
  host:'http://localhost:3000',
  apiGithub:' https://api.github.com/users/IDBRAHIMDEV/followers',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/',

    // Realm
    realm: 'tasks',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'tasks-ui',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
