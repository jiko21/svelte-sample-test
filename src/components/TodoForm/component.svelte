<script lang="ts">
  import Button from '../Button';
  import Input from '../Input';
  import { createEventDispatcher } from 'svelte';

  let input = '';
  const dispatch = createEventDispatcher();
  const handleSubmit = () => {
    if (input.length > 0) {
      dispatch('add', {
        value: input,
      });
      input = '';
    }
  };
  $: submittable = input.length > 0;
</script>

<div class="todo-form">
  <Input type="text" bind:value='{input}' testId="todo-input" />
  <Button on:click={handleSubmit} label='ADD' disabled='{!submittable}' testId="submit" />
</div>
