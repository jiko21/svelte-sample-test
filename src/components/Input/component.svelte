<script lang="ts">
  export let type, value, testId;
  const typeAction = (node) => {
    node.type = type;
  }
</script>
<input use:typeAction bind:value data-testid={testId} />
<style>
  input {
    box-sizing: border-box;
    border: solid 1px #cccccc;
    border-radius: 4px;
    line-height: 16px;
    padding: 8px 4px;
    height: 32px;
  }
</style>