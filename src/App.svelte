<script>
  import { fade } from 'svelte/transition';

  import Watch from './Watch.svelte';
  import StartButton from './StartButton.svelte';
  import Footer from './Footer.svelte';
  import Title from './Title.svelte';

  const initTime = 240;
  let remainingTime = initTime;
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
    margin: 0 auto;
    height: 100vh;
  }

  main.done {
    background-color: black;
    animation-direction: alternate;
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
    {#if timer !== null}
      <div transition:fade={{ duration: 500 }}>
        <Watch time={remainingTime} {initTime} />
      </div>
    {:else}
      <Title />
      <StartButton on:start={startStopWatch} />
    {/if}
  </section>
</main>
{#if timer === null}
  <Footer />
{/if}
