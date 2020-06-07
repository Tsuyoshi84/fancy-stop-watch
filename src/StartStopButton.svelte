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
    background-color: #222;
    border: 1px solid var(--color);
    font-size: 4em;

    transition: all 0.1s ease-in-out;
  }

  button:hover {
    --color: #aaa;
    cursor: pointer;
    background-color: #111;
  }
</style>

<button on:click={handleClick}>{label}</button>
