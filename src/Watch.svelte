<script>
  export let time = 0;
  export let initTime = 0;

  const maxAngle = 360;
  const anglePrecision = 6;
  $: needles = [...Array(maxAngle / anglePrecision).keys()].map((a) => {
    return { angle: a, on: false };
  });

  let sec1 = 0;
  let sec2 = 0;
  let min1 = 0;
  let min2 = 0;
  let hueRotateAngle = "0deg";
  let done = false;

  function isNeedleOn(angle) {
    const on =
      (initTime - time) / initTime > (angle * anglePrecision) / maxAngle;
    return on;
  }

  $: {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    sec2 = Math.floor(sec / 10);
    sec1 = sec - sec2 * 10;

    min2 = Math.floor(min / 10);
    min1 = min - min2 * 10;

    hueRotateAngle = `${time * 2}deg`;
    done = time === 0;

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
    border-radius: 50%;
    width: 600px;
    height: 600px;
    max-width: 100vw;
    max-height: 100vw;
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .watch.done {
    animation: gehin 5s linear infinite;
  }

  @keyframes gehin {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  .time-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .number {
    --number-width: 7rem;
    width: var(--number-width);
    font-size: 10rem;
    color: #adb2ab;
    text-shadow: 3px 3px 12px #bebebe, -3px -3px 12px #ffffff;
  }

  .needle {
    --needle-angle: 0deg;
    --needle-length: -270px;
    position: absolute;
    width: 10px;
    height: 30px;
    border-radius: 50%;
    transform: rotate(var(--needle-angle)) translate(0px, var(--needle-length));
    transition: all 2s ease-in-out;
    transition-delay: -1s;
  }

  .needle.on {
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 2px 2px 4px #aaaaaa, -2px -2px 4px #ffffff;
  }

  .needle.done {
    filter: hue-rotate(var(--needle-angle));
  }

  @media (max-width: 540px) {
    .number {
      --number-width: 23vw;
      font-size: 5rem;
    }

    .needle {
      --needle-length: calc(100vw / 2 * -1 + 30px);
    }
  }
</style>

<section class="watch" class:done style="--hue-rotate-angle: {hueRotateAngle}">
  {#each needles as needle}
    <div
      class="needle"
      class:done
      class:on={needle.on}
      style="--needle-angle: {needle.angle * anglePrecision}deg" />
  {/each}

  <div class="time-wrapper">
    <div class="number">{min2}</div>
    <div class="number">{min1}</div>
  </div>

  <div class="time-wrapper">
    <div class="number">{sec2}</div>
    <div class="number">{sec1}</div>
  </div>
</section>
