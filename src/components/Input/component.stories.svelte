<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Input from './component.svelte';
</script>

<Meta
  title="components/Input"
  component={Input}
  argTypes={{
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
  }}
/>

<Template let:args>
  <Input {...args} />
</Template>

<Story
  name="text"
  args={{
    type: 'text',
  }}
/>

<Story
  name="email"
  args={{
    type: 'email',
  }}
/>

<Story
  name="password"
  args={{
    type: 'password',
  }}
/>