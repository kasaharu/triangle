import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import { ButtonComponent } from './button.component';

storiesOf('Atoms/Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  )
  .add(
    'index',
    withNotes({ text: 'button タグ' })(() => ({
      template: `
      <button gad-button>Default Button</button>
      <button gad-button [color]="'primary'">Primary Button</button>
      <button gad-button [color]="'danger'">Danger Button</button>
      `,
    })),
  );
