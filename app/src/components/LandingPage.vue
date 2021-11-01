<template>
  <div class="content">
    <div class="menu">
      <button v-on:click="$emit('swapcomponent', 'ConfViewer')" class="btn light-green">Day 2 Sessions</button>        
      <a href="https://tniconf.dfds.cloud/assets/tniconference-2021-full-program.pdf" class="btn light-green" target="_blank">Detailed program PDF</a>
      <a href="https://tniconf.dfds.cloud/assets/tniconference-seating-dinner-day-2.pdf" class="btn light-green" target="_blank">Day 2 Dinner seating PDF</a>
    </div>
    <div class="banner"><img src="https://dfds-ti-conf-data.s3.eu-central-1.amazonaws.com/tech-moves-us.jpg" /></div>
    <div class="text">
      <p>Dear colleague<br />Welcome to the TECH MOVES US T&I Conference. We are so excited to finally welcome you for our very first conference in three years. We kindly ask you to look at the practical information below regarding the upcoming event.</p>
      <h2>Where to meet the 2nd of November</h2>
      <p>
        The ship is docked at the DFDS Terminal in Dampfærgevej 30. (street address).
        <ul>
          <li> <span style="font-weight: 700">1.</span> If you arrive by your own car, please park at DFDS House. Remember to register at the PLOT app.</li>
          <li> <span style="font-weight: 700">2.</span> If you arrive by train, the S-train stops at the nearest station called Nordhavn. When you get out of the station, turn left and walk under the railway. On the other side of the road, you can see the terminal and the ship.</li>
          <li> <span style="font-weight: 700">3.</span> If you arrive by taxi, tell the driver to take you to Oslobåden at Dampfærgevej 30.</li>
        </ul>
      </p>
      <h2>Check in and boarding</h2>
      <p>You can arrive for check-in at the terminal from 8:30 CET. You MUST arrive no later than 9:30 CET. As we will swipe everyone’s passport to get all the needed passenger information for the manifest, we recommend that you come as early as possible to avoid long lines before boarding. Please remember to bring your passport or national ID.</p>
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
