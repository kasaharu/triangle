import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { RouterTestingModule } from '@angular/router/testing';

import { LinkComponent } from './link.component';

storiesOf('Atoms/Link', module)
  .add('ラベル表示', () => ({
    component: LinkComponent,
    props: { linkText: 'Default Link', linkPath: '/' },
    moduleMetadata: { imports: [RouterTestingModule] },
  }));
