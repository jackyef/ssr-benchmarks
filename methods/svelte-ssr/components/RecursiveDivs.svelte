<script>
  export let depth;
  export let breadth;
  
  const handleClick = () => {
    console.log('clicked');
  }
</script>

{#if depth <= 0} 
  <div>abcdefghij</div>
{:else}
  <div on:click={handleClick}>
    {#each Array(breadth) as _, index}
      <svelte:self depth={depth - 1} breadth={breadth - 1} />
    {/each}}
  </div>
{/if}