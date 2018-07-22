import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from './button.component';

storiesOf('Atoms/Button', module)
  .add('ラベル表示', () => ({
    component: ButtonComponent,
    props: {
      innerLabel: 'Hello Button',
    },
  }))
  .add(
    'Click イベント',
    withNotes({ text: 'This button is clickable' })(() => ({
      component: ButtonComponent,
      props: {
        innerLabel: 'Clickable Button',
        onClick: action('Clicked!'),
      },
    })),
  );
