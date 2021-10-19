<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Todo from './component.svelte';
</script>

<Meta
  title="components/Todo"
  component={Todo}
  argTypes={{}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Todo {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Default"
/>
