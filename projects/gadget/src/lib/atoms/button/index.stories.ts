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
    'is-priamary',
    withNotes({ text: 'This button is primary' })(() => ({
      component: ButtonComponent,
      props: {
        innerLabel: 'Primary Button',
        additionalClass: 'is-primary',
      },
    })),
  )
  .add(
    'is-danger',
    withNotes({ text: 'This button is danger' })(() => ({
      component: ButtonComponent,
      props: {
        innerLabel: 'Danger Button',
        additionalClass: 'is-danger',
      },
    })),
  )
  .add(
    'is-disabled',
    withNotes({ text: 'This button is disabled' })(() => ({
      component: ButtonComponent,
      props: {
        innerLabel: 'Disabled Button',
        additionalClass: 'is-disabled',
        clickButton: action('cannot click'),
      },
    })),
  )
  .add(
    'Click イベント',
    withNotes({ text: 'This button is clickable' })(() => ({
      component: ButtonComponent,
      props: {
        innerLabel: 'Clickable Button',
        clickButton: action('Clicked!'),
      },
    })),
  );
