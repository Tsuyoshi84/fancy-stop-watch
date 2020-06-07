<script>
  import { createEventDispatcher } from "svelte";
  let label = "Start";

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch("start", {});
  }
</script>

<button on:click={handleClick}>{label}</button>
