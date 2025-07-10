import { httpResource } from '@angular/common/http';
import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { CorpIdUserData } from '../../app/auth/corpid.type';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExampleComponent {
  private readonly oidcSecurityService = inject(OidcSecurityService);

  protected showText = signal(false);
  protected userData = computed(
    () => this.oidcSecurityService.userData().userData as CorpIdUserData,
  );

  // example for a backend call with automated fetch-handling
  protected userFromServer = httpResource(
    () => `https://localhost:4000/api/user/${this.userData().user_name}`,
  );

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }
}
