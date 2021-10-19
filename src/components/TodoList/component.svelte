<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../Button';
  import Card from '../Card';
  export let lists = [];
  const dispatch = createEventDispatcher();
  const removeItem = (id: number) => {
    dispatch('remove', {
      id: id,
    });
  };
</script>

<ul>
  {#each lists as item (item.id)}
    <li>
      <Card>
        <div class="card-container">
          <span>{item.content}</span>
          <Button
            on:click={() => removeItem(item.id)}
            label={'remove'}
            testId={`remove-${item.id}`}
            style="danger"
          />
        </div>
      </Card>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
      margin: 4px 0;
  }

  .card-container {
      align-items: center;
      display: flex;
      justify-content: space-between;
  }

  span {
      color: #3c3c3c;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
</style>
