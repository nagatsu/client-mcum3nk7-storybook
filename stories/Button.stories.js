import { fn } from '@storybook/test';
import { createButton } from './Button';

export default {
  title: 'テスト株式会社/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};