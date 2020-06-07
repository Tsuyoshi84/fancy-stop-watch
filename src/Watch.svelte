<script>
  export let time = 0;
  let timeLabel = "";

  $: {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    let minLabel = min < 10 ? `0${min}` : `${min}`;
    let secLabel = sec < 10 ? `0${sec}` : `${sec}`;

    timeLabel = `${minLabel}:${secLabel}`;
  }
</script>

<style>

</style>

<section>{timeLabel}</section>
