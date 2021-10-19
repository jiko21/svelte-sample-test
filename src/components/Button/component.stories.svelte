<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './component.svelte';
</script>

<Meta
  title="components/Button"
  component={Button}
  argTypes={{
    label: { control: 'text' },
    style: {
      type: 'select',
      options: ['primary', 'danger'],
    },
    disabled: { control: 'bool' },
    onClick: { action: 'onClick' },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story
  name="primary"
  args={{
    label: 'button',
    style: 'primary',
    disabled: false,
  }}
/>

<Story
  name="danger"
  args={{
    label: 'button',
    style: 'danger',
    disabled: false,
  }}
/>

<Story
  name="Disabled"
  args={{
    label: 'button',
    disabled: true,
  }}
/>
