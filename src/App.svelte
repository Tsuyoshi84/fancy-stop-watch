<script>
  import Watch from "./Watch.svelte";
  import StartStopButton from "./StartStopButton.svelte";

  let remainingTime = 240;

  function startStopWatch() {
    setInterval(() => {
      remainingTime -= 1;
    }, 1000);
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
