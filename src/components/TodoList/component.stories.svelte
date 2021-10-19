<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import TodoList from './component.svelte';
</script>

<Meta
  title="components/TodoList"
  component={TodoList}
  argTypes={{
    lists: { control: 'text' },
    onRemove: { action: 'onRemove' },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <TodoList {...args} on:remove={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Default"
  args={{
    lists: [
      {
        id: 1,
        content: 'test1test1',
      },
      {
        id: 2,
        content: 'test2test2',
      },
      {
        id: 3,
        content: 'test3test3test3test3test3test3test3test3test3test3test3test3',
      },
    ],
  }}
/>
