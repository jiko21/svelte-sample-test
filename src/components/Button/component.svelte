<script lang="ts">
  type ButtonStyle = 'primary' | 'danger';
  export let label = '';
  export let style: ButtonStyle = 'primary';
  export let disabled = false;
  export let testId = '';

  let className: ButtonStyle | 'disabled' = style;
  $: computeStyle(disabled)

  const computeStyle = (disabled) => {
    className = disabled ? 'disabled' : style;
  }
</script>

<button class={className} data-testid={testId} disabled={disabled} on:click>
  {label}
</button>

<style>
  button {
    border: none;
    border-radius: 4px;
    font-weight: 700;
    height: 32px;
    line-height: 16px;
    min-width: 60px;
    padding: 8px 4px;
    position: relative;
  }

  button:active {
      top: 1px;
  }

  button.primary {
    background-color: #00c1cf;
    color: white;
  }

  button.primary:hover {
    background-color: #5ec9d1;
    color: white;
  }

  button.danger {
      background-color: #ff002b;
      color: white;
  }

  button.danger:hover {
      background-color: #ff3b3b;
      color: white;
  }

  button.disabled {
    background-color: #dfdfdf;
    color: #3c3c3c;
  }

  button.disabled:active {
      top: 0;
  }
</style>
