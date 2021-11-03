<template>
  <div class="content">
    <div class="menu">
      <button v-on:click="$emit('swapcomponent', 'ConfViewer')" class="btn light-green">Sessions</button>        
      <a href="https://tniconf.dfds.cloud/assets/tniconference-2021-full-program.pdf" class="btn light-green" target="_blank">Detailed program PDF</a>
      <a href="https://tniconf.dfds.cloud/assets/tniconference-seating-dinner-day-2.pdf" class="btn light-green" target="_blank">Day 2 Dinner seating PDF</a>
    </div>
    <div class="banner"><img src="https://dfds-ti-conf-data.s3.eu-central-1.amazonaws.com/tech-moves-us.jpg" /></div>
    <div class="text">
      <p>Dear colleague<br />Welcome to the TECH MOVES US T&I Conference. We hope you are enjoying the conference and invite you to study the conference program at the links above.</p>
      <h2>Regarding LUNCH on Day 2</h2>
      <p>
        Sandwiches are available at the entrance to Columbus Club. The social activity is Networking Bingo.
      </p>
      <h2>Regarding dinner on Day 2</h2>
      <p>
        Day 2 is a formal dinner at 20.00 in Seven Seas. Please see seating assignments on the posters near the restaurant, or click the link to the seating plan PDF above.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LandingPage',
  props: {
    currentcomponentpayload : Array
  },
  data() {
    return {}
  },
  methods: {
    redirectUrl(url : string) {
      window.location.href=url;
    }
  },
  computed: {
  },
  mounted: function() {
    document.title = "DFDS T&I conf 2021";
  }
}
</script>

<style lang="scss">

button {
  font-family: 'DFDS-Regular', 'Arial', sans-serif;
}

</style>
