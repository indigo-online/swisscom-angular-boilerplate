import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://sso-corproot-v2.dev-scapp.swisscom.com',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: environment.clientId,
    scope: 'openid profile roles email user_attributes',
    responseType: 'code',
    silentRenew: false, // disabled since CorpId doesn't support it yet
    renewTimeBeforeTokenExpiresInSeconds: 10,
    secureRoutes: ['http://localhost:4000/*'],
  },
};
