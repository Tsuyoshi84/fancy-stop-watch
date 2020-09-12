<script>
  import { createEventDispatcher } from 'svelte';
  let label = 'Start';

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch('start', {});
  }
</script>

<style>
  button {
    --color: blue;

    color: var(--color);
    background-color: rgb(0 0 0 / 0.7);
    border: 5px solid var(--color);
    border-radius: 1rem;
    font-size: 5rem;
    padding: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    background-color: rgb(0 0 0 / 0.2);
    filter: brightness(2);
  }
</style>

<button on:click={handleClick}>{label}</button>
