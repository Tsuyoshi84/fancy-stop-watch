<script>
  import { createEventDispatcher } from "svelte";
  let label = "Start";

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch("start", {});
  }
</script>

<style>
  button {
    --color: #fff;

    color: var(--color);
    background-color: rgb(0 0 0 / 0.5);
    border: 1px solid var(--color);
    font-size: 5em;

    transition: all 0.2s ease-in-out;
  }

  button:hover {
    --color: #aaa;
    cursor: pointer;
    background-color: rgb(0 0 0 / 0.4);
  }
</style>

<button on:click={handleClick}>{label}</button>
