<script lang='ts'>
  import TodoForm from '../TodoForm';
  import TodoList from '../TodoList';

  let lists = [];
  let id = 0;

  const handleSubmit = (value) => {
    lists = [
      ...lists,
      {
        id: id++,
        content: value.detail.value,
      },
    ];
  };

  const removeItem = (value) => {
    lists = lists.filter((item) => item.id !== value.detail.id);
  };
</script>

<div class='todo'>
  <h2>Todo app</h2>
  <TodoForm on:add={handleSubmit} />
  <div class='container'>
    <TodoList {lists} on:remove={removeItem} />
  </div>
</div>

<style>
    h2 {
        color: #3c3c3c;
    }

    .todo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20%;
    }

    .container {
        width: 100%;
    }
</style>
