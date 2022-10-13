import { Meta, StoryObj } from '@storybook/react/types-7-0';
import { Text } from './Text'
import { CheckBox, CheckBoxProps } from './CheckBox';

export default{
  title: 'Components/CheckBox',
  component: CheckBox,
  args:{},
  argTypes:{},
  decorators: [
    (Story) => {
      return(
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
