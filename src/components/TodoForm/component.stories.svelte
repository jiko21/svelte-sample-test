<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import TodoForm from './component.svelte';
</script>

<Meta
  title="components/TodoForm"
  component={TodoForm}
  argTypes={{
    add: { action: 'add' },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <TodoForm {...args} on:add={args.add} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Default"
  args={{}}
/>
