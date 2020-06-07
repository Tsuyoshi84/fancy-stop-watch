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

</style>

<div>
  <Number value={min2} />
  <Number value={min1} />
  :
  <Number value={sec2} />
  <Number value={sec1} />
</div>
