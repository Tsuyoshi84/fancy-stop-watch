<script>
  import Watch from "./Watch.svelte";
  import StartStopButton from "./StartStopButton.svelte";

  let remainingTime = 10;
  let timer = null;

  function startStopWatch() {
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
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Watch time={remainingTime} />
  <StartStopButton on:start={startStopWatch} />
</main>
