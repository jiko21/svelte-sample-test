<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Card from './component.svelte';
</script>

<Meta
  title="components/Card"
  component={Card}
  argTypes={{}}
/>

<Template let:args>
  <Card {...args}>
    aaaaaaaaaaaaaaaa
  </Card>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Default"
  args={{}}
/>
