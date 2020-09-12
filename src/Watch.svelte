<script>
  import Number from './Number.svelte';

  export let time = 0;

  let sec1 = 0;
  let sec2 = 0;
  let min1 = 0;
  let min2 = 0;

  $: {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    sec2 = Math.floor(sec / 10);
    sec1 = sec - sec2 * 10;

    min2 = Math.floor(min / 10);
    min1 = min - min2 * 10;
  }
</script>

<style>
  .watch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid blue;
    box-shadow: 0 0 40px 0px blue;
    border-radius: 50%;
    width: 600px;
    height: 600px;
    max-width: 100vw;
    max-height: 100vw;
    animation: blur alternate 5s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  .time-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .number {
    width: 7rem;
  }

  @media (max-width: 540px) {
    .number {
      width: 23vw;
    }
  }

  @keyframes blur {
    0% {
      box-shadow: 0 0 2px 0px blue;
    }

    20% {
      box-shadow: 0 0 2px 0px blue;
    }
    100% {
      box-shadow: 0 0 40px 10px blue;
    }
  }
</style>

<section class="watch">
  <div class="time-wrapper">
    <div class="number">
      <Number value={min2} />
    </div>
    <div class="number">
      <Number value={min1} />
    </div>
  </div>

  <div class="time-wrapper">
    <div class="number">
      <Number value={sec2} />
    </div>
    <div class="number">
      <Number value={sec1} />
    </div>
  </div>
</section>
