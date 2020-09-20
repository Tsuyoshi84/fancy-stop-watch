<script>
  import Number from './Number.svelte';

  export let time = 0;
  export let initTime = 0;

  const maxAngle = 360;
  const anglePrecision = 3;
  $: needles = [...Array(maxAngle / anglePrecision).keys()].map((a) => {
    return { angle: a, on: false };
  });

  let sec1 = 0;
  let sec2 = 0;
  let min1 = 0;
  let min2 = 0;

  function isNeedleOn(angle) {
    const on = (initTime - time) / initTime > (angle * anglePrecision) / maxAngle;
    return on;
  }

  $: {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    sec2 = Math.floor(sec / 10);
    sec1 = sec - sec2 * 10;

    min2 = Math.floor(min / 10);
    min1 = min - min2 * 10;

    needles = needles.map((n) => {
      return { ...n, ...{ on: isNeedleOn(n.angle) } };
    });
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
    --number-width: 7rem;
    width: var(--number-width);
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

  .needle {
    --needle-angle: 0deg;
    --needle-length: -270px;
    position: absolute;
    width: 4px;
    height: 40px;
    border: 1px solid blue;
    border-radius: 5px;
    background-color: transparent;
    transform: rotate(var(--needle-angle)) translate(0px, var(--needle-length));
    transition: all 2s ease-in-out;
    transition-delay: -1s;
  }

  .needle.on {
    background-color: #88f;
    box-shadow: 0 0 10px 3px #33f;
  }

  @media (max-width: 540px) {
    .number {
      --number-width: 23vw;
    }

    .needle {
      --needle-length: calc(100vw / 2 * -1 + 30px);
    }
  }
</style>

<section class="watch">
  {#each needles as needle}
    <div class="needle" class:on={needle.on} style="--needle-angle: {needle.angle * anglePrecision}deg" />
  {/each}

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
