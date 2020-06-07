<script>
  import { fly, fade } from "svelte/transition";

  import Watch from "./Watch.svelte";
  import StartStopButton from "./StartStopButton.svelte";

  let remainingTime = 3;
  let timer = null;

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
    background: linear-gradient(
      90deg,
      rgba(10 10 20 / 1) 0%,
      rgba(20 20 60 / 1) 35%,
      rgba(30 30 120 / 1) 100%
    );
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

<main>
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
