<script>
  import { fly, fade } from "svelte/transition";

  import Watch from "./Watch.svelte";
  import StartButton from "./StartButton.svelte";
  import Footer from "./Footer.svelte";

  let remainingTime = 240;
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
  h1 {
    padding: 1rem;
    font-size: 3rem;
    display: block;
  }

  main {
    text-align: center;
    margin: 0 auto;
    height: 100vh;
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

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 50px);
  }
</style>

<main class:done>
  <section>
    <h1>Fancy Stop Watch</h1>

    {#if timer !== null}
      <div transition:fade={{ duration: 500 }}>
        <Watch time={remainingTime} />
      </div>
    {:else}
      <StartButton on:start={startStopWatch} />
    {/if}
  </section>
</main>
<Footer />
