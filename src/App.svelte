<script>
  import Watch from "./Watch.svelte";
  import StartStopButton from "./StartStopButton.svelte";

  let remainingTime = 100;
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
      timer = null;
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
      <Watch time={remainingTime} />
    {:else}
      <StartStopButton on:start={startStopWatch} />
    {/if}
  </section>
</main>
