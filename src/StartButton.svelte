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
    --color: #666;

    color: var(--color);
    background-color: rgb(0 0 0 / 0.7);
    font-size: 4rem;
    padding: 1.5rem;
    transition: all 0.2s ease-in-out;
    border: none;
    border-radius: 50px;
    border-radius: 50px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  button:hover {
    cursor: pointer;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  button:active,
  button:focus {
    cursor: pointer;

    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;
  }
</style>

<button on:click={handleClick}>{label}</button>
