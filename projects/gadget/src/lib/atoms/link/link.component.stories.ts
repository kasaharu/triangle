import { RouterTestingModule } from '@angular/router/testing';
import { storiesOf } from '@storybook/angular';

import { LinkComponent } from './link.component';

storiesOf('Atoms/Link', module).add('ラベル表示', () => ({
  component: LinkComponent,
  props: { linkText: 'Default Link', linkPath: '/' },
  moduleMetadata: { imports: [RouterTestingModule] },
}));
