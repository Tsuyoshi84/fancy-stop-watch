<script>
  import { fly, fade } from "svelte/transition";

  import Watch from "./Watch.svelte";
  import StartStopButton from "./StartStopButton.svelte";

  let remainingTime = 3;
  let timer = null;
  let done = false;

  function startStopWatch() {
    if (timer !== null) {
      return;
    }

    timer = setInterval(timerTicked, 1000);
  }

  function timerTicked() {
    remainingTime -= 1;

    if (remainingTime === 0) {
      clearInterval(timer);
      done = true;
    }
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    height: 100vh;
    background-color: #222;
  }

  main.done {
    animation: gradient 5s ease-in-out infinite;
    animation-direction: alternate;
  }

  @keyframes gradient {
    0% {
      background-color: #222;
    }
    30% {
      background-color: #332;
    }
    50% {
      background-color: #842;
    }
    80% {
      background-color: #163;
    }
    100% {
      background-color: #248;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>

<main class:done>
  <section>
    {#if timer !== null}
      <div transition:fade={{ duration: 500 }}>
        <Watch time={remainingTime} />
      </div>
    {:else}
      <StartStopButton on:start={startStopWatch} />
    {/if}
  </section>
</main>
