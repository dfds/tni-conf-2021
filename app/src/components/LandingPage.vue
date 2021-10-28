<template>
  <div class="landingPage">
    <div class="content">
      <div class="menu">
        <button v-on:click="$emit('swapcomponent', 'ConfViewer')" class="btn light-green">Day 2 Sessions</button>        
        <button v-on:click="redirectUrl('https://tniconf.dfds.cloud/assets/tniconference-2021-full-program.pdf')" class="btn light-green">Detailed program PDF</button>
        <button v-on:click="redirectUrl('https://tniconf.dfds.cloud/assets/tniconference-seating-dinner-day-2.pdf')" class="btn light-green">Seating overview PDF</button>
      </div>

      <div class="banner"><img src="https://dfds-ti-conf-data.s3.eu-central-1.amazonaws.com/tech-moves-us.jpg" /></div>

      <div class="text">
        <h1>Welcome</h1>

<p>Dear colleague

Welcome to the TECH MOVES US T&I Conference. We are so excited to finally welcome you for our very first conference in three years.

We kindly ask you to look at the practical information below regarding the upcoming event.
</p>

<h2>Where to meet the 2nd of November</h2>

<p>The ship is docked at the DFDS Terminal in Dampfærgevej 30. (street address).

1. If you arrive by your own car, please park at DFDS House. Remember to register at the PLOT app.
2. If you arrive by train, the S-train stops at the nearest station called Nordhavn. When you get out of the station, turn left and walk under the railway. On the other side of the road, you can see the terminal and the ship.
3. If you arrive by taxi, tell the driver to take you to Oslobåden at Dampfærgevej 30.

</p>

<h2> Check in and boarding</h2>

<p>You can arrive for check-in at the terminal from 8:30 CET.  You MUST arrive no later than 9:30 CET.
As we will swipe everyone’s passport to get all the needed passenger information for the manifest, we recommend that you come as early as possible to avoid long lines before boarding.
Please remember to bring your passport or national ID.</p>      


      </div>

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
  }
}
</script>

<style lang="scss">
  .content {
    margin: 5px 0px 0px 0px;
    width: 100%;

    .text {
      width: 90%;
      p {
        line-height: 1.7;
        margin: 12px 0px 20px 0px;
      }


    }

      h1 {
        font-size: 2.7em;
        text-align: center;
      }    

    .menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 5px;
    }

    .banner {
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        width: 95%;
      }
    }
  }

  @media screen and (min-width:700px) {
    .content {
      .text {
        width: 100%;
      }

      .banner {
        img {
          width: 60%;
        }
      }
    }
  }

  .landingPage {
    display: flex;
    justify-content: center;
  }
</style>