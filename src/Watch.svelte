<script>
  import Number from "./Number.svelte";

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
  section {
    display: flex;
  }

  @media (max-width: 640px) {
    section {
      flex-direction: column;
    }
  }

  .time-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .unit {
    font-size: 3rem;
    padding-bottom: 0.5rem;
  }

  .number {
    width: 7rem;
  }
</style>

<section>
  <div class="time-wrapper">
    <div class="number">
      <Number value={min2} />
    </div>
    <div class="number">
      <Number value={min1} />
    </div>
    <span class="unit">min</span>
  </div>

  <div class="time-wrapper">
    <div class="number">
      <Number value={sec2} />
    </div>
    <div class="number">
      <Number value={sec1} />
    </div>
    <span class="unit">sec</span>
  </div>
</section>
