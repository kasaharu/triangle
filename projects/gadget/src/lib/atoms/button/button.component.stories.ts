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
    'デフォルト',
    withNotes({ text: 'button タグ' })(() => ({
      template: `<button gad-button>ボタン</button>`,
    })),
  );
