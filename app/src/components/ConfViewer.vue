<template>
  <div class="events">
    <div class="menu">
      <button class="btn light-green" v-on:click="$emit('swapcomponent', 'LandingPage')">Introduction</button>
    </div>

    <div v-for="day in Array.from(this.eventStructure.events.keys())" :key="day">
      <div class="day">
        <h2>Day {{ day }}</h2>
      </div>
      <div class="schedule" aria-labelledby="schedule-heading">
        <span class="track-slot track-1" aria-hidden="true" style="grid-column: track-1; grid-row: tracks;">{{convertTrackToName(1)}}</span>
        <span class="track-slot track-2" aria-hidden="true" style="grid-column: track-2; grid-row: tracks;">{{convertTrackToName(2)}}</span>
        <span class="track-slot track-3" aria-hidden="true" style="grid-column: track-3; grid-row: tracks;">{{convertTrackToName(3)}}</span>
        <span class="track-slot track-4" aria-hidden="true" style="grid-column: track-4; grid-row: tracks;">{{convertTrackToName(4)}}</span>
        <span class="track-slot track-5" aria-hidden="true" style="grid-column: track-5; grid-row: tracks;">{{convertTrackToName(5)}}</span>
        <span class="track-slot track-6" aria-hidden="true" style="grid-column: track-6; grid-row: tracks;">{{convertTrackToName(6)}}</span>
        <span class="track-slot track-7" aria-hidden="true" style="grid-column: track-7; grid-row: tracks;">{{convertTrackToName(7)}}</span>
        <div class="tracks">
          <span class="track-slot track-1" aria-hidden="true" style="grid-column: track-1; grid-row: tracks;">{{convertTrackToName(1)}}</span>
          <span class="track-slot track-2" aria-hidden="true" style="grid-column: track-2; grid-row: tracks;">{{convertTrackToName(2)}}</span>
          <span class="track-slot track-3" aria-hidden="true" style="grid-column: track-3; grid-row: tracks;">{{convertTrackToName(3)}}</span>
          <span class="track-slot track-4" aria-hidden="true" style="grid-column: track-4; grid-row: tracks;">{{convertTrackToName(4)}}</span>
          <span class="track-slot track-5" aria-hidden="true" style="grid-column: track-5; grid-row: tracks;">{{convertTrackToName(5)}}</span>
          <span class="track-slot track-6" aria-hidden="true" style="grid-column: track-6; grid-row: tracks;">{{convertTrackToName(6)}}</span>
          <span class="track-slot track-7" aria-hidden="true" style="grid-column: track-7; grid-row: tracks;">{{convertTrackToName(7)}}</span>  
        </div>
        <h2 class="time-slot" style="grid-row: time-0915;">9:15</h2>
        <h2 class="time-slot" style="grid-row: time-1000;">10:00</h2>
        <h2 class="time-slot" style="grid-row: time-1015;">10:15</h2>
        <h2 class="time-slot" style="grid-row: time-1100;">11:00</h2>
        <h2 class="time-slot" style="grid-row: time-1115;">11:15</h2>
        <h2 class="time-slot" style="grid-row: time-1200;">12:00</h2>
        <h2 class="time-slot" style="grid-row: time-1330;">13:30</h2>
        <h2 class="time-slot" style="grid-row: time-1415;">14:15</h2>
        <h2 class="time-slot" style="grid-row: time-1430;">14:30</h2>
        <h2 class="time-slot" style="grid-row: time-1515;">15:15</h2>
        <h2 class="time-slot" style="grid-row: time-1530;">15:30</h2>
        <h2 class="time-slot" style="grid-row: time-1615;">16:15</h2>
        <h2 class="time-slot" style="grid-row: time-1630;">16:30</h2>
        <h2 class="time-slot" style="grid-row: time-1700;">17:00</h2>
        <div v-for="event in eventStructure.events.get(day)" :key="event.name + event.track" :class="['session', 'session-' + Math.floor(Math.random() * 100) + 1, 'track-' + event.track]" :style="{gridColumn: 'track-' + event.track, gridRow: 'time-' + getTimeStart(event.time) + ' / time-' + getTimeEnd(event.time)}">
          <h3 class="session-title"><a href="#">{{ event.name }}</a></h3>
          <div style="margin-top: 1px;"></div>
          <span class="session-time">{{ event.time }}</span>
          <div style="margin-top: 1px;"></div>
          <span v-if="showIfNotEmpty(event.theme)" class="session-location">Theme: {{ event.theme }}</span>   
          <div style="margin-top: 1px;"></div>
          <span v-if="showIfNotEmpty(event.genre)" class="session-genre">Type: {{ event.genre }}</span>
          <div style="margin-top: 2px;"></div>
          <span class="session-presenter">{{ event.speaker }}</span>
          <div style="margin-top: 10px;"></div>
          <span class="session-description">{{ event.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ConfViewer',
  props: {
    events: Array,
    currentcomponentpayload : Array
  },
  data() {
    return {
      schedule: [],
      timer: ''
    }
  },
  methods: {
    getTimeStart(val : String) : String {
      // 17:15-17:45
      let splitTimes = val.split("-");
      let splitHourMinutes = splitTimes[0].split(":");
      return splitHourMinutes[0] + splitHourMinutes[1];
    },
    getTimeEnd(val : String) : String {
      let splitTimes = val.split("-");
      let splitHourMinutes = splitTimes[1].split(":");
      return splitHourMinutes[0] + splitHourMinutes[1];
    },
    showIfNotEmpty(val : string) : boolean {
      if (val === undefined) {
        return false;
      }

      if (val === "") {
        return false;
      }

      return true;
    },
    convertTrackToName(val : number) : any {
      switch (val) {
        case 1: {
          return "Columbus";
        }
        case 2: {
          return "Auditorium 1";
        }
        case 3: {
          return "Auditorium 2";
        }
        case 4: {
          return "105";
        }
        case 5: {
          return "107+108";
        }
        case 6: {
          return "101";
        }
        case 7: {
          return "106";
        }
      }
    }
  },
  computed: {
    eventStructure() : any {
      let payload = {
        events : new Map()
      };

      (this as any).events.forEach((evt : any) => {
        if (!payload.events.has(evt.day)) {
          payload.events.set(evt.day, []);
        }

        payload.events.get(evt.day).push(evt);
      });

      return payload;
    }
  },
  mounted: function() {
    document.title = "DFDS T&I conf 2021 - Schedule";
    // fetch("https://dfds-ti-conf-data.s3.eu-central-1.amazonaws.com/schedule.json")
    //   .then(resp => resp.json())
    //   .then(data => {
    //     (this as any).schedule = data;
    //   });
  }
}
</script>

<style lang="scss">
  .event {
    display: flex;
    flex-direction: column;
    margin: 10px 0px 10px 0px;
    padding: 20px 0px 20px 0px;
    background-color: rgb(3, 53, 85);
  }

  .day {
    margin: 10px -20px;
    padding: 20px;
    background-color: rgb(5, 65, 102);

    @media screen and (min-width:768px) {
      margin: 10px -32px;
    }
  }

// Custom

@media screen and (min-width:700px) {
  .schedule {
    display: grid;
    grid-gap: 1em;
    grid-template-rows:
      [tracks] auto
      [time-0915] auto
      [time-0930] auto
      [time-0945] auto
      [time-1000] auto
      [time-1015] auto
      [time-1030] auto
      [time-1045] auto
      [time-1100] auto
      [time-1115] auto
      [time-1130] auto
      [time-1145] auto
      [time-1200] auto
      [time-1215] auto
      [time-1230] auto
      [time-1245] auto
      [time-1300] auto
      [time-1315] auto
      [time-1330] auto
      [time-1345] auto
      [time-1400] auto
      [time-1415] auto
      [time-1430] auto
      [time-1445] auto
      [time-1500] auto
      [time-1515] auto
      [time-1530] auto
      [time-1545] auto
      [time-1600] auto
      [time-1615] auto
      [time-1630] auto
      [time-1645] auto
      [time-1700] auto
      [time-1715] auto
      [time-1730] auto
      [time-1745] auto;
      /* Note 1:
      Use 24hr time for gridline names for simplicity

      Note 2: Use "auto" instead of "1fr" for a more compact schedule where height of a slot is not proportional to the session length. Implementing a "compact" shortcode attribute might make sense for this!
      Try 0.5fr for more compact equal rows. I don't quite understand how that works :)
      */
    
    grid-template-columns:
      [times] 4em
      [track-1-start] 1fr
      [track-1-end track-2-start] 1fr
      [track-2-end track-3-start] 1fr
      [track-3-end track-4-start] 1fr
      [track-4-end track-5-start] 1fr
      [track-5-end track-6-start] 1fr
      [track-6-end track-7-start] 1fr
      [track-7-end];
  }
}

.time-slot {
  display: none;
  grid-column: times;
}

.track-slot {
  display: none; /* hidden on small screens and browsers without grid support */
  color: rgb(48, 48, 48);
  padding: 10px;
}

.session-description {
  word-break: break-all;
}

.tracks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .track-slot {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 0 10px;
  }
}

@supports( display:grid ) {
  @media screen and (min-width:700px) {
    .time-slot {
      display: flex;
      justify-content: center;
      width: 80px;
    }

    .tracks {
      display: none;
    }

    .session-title,
    .time-slot {
      margin: 0;
      font-size: 1em;
      display: flex;
      flex-wrap: wrap;
    }    

    .track-slot {
      display: block;
      position: sticky;
      width: 100%;
      top: 0;
      z-index: 1000;
      background-color: rgba(255,255,255,.9);
    }

    .session-description {
      
    }
  }
}

/* Small-screen & fallback styles */
.session {
  margin-bottom:  1em;
}

@supports( display:grid ) {
  @media screen and (min-width: 700px) {
    .session {
      margin: 0;
    } 
  }
}

/*************************
 * VISUAL STYLES
 * Design-y stuff ot particularly important to the demo
 *************************/
.session {
  padding: .5em;
  border-radius: 2px;
  font-size: 14px;
  box-shadow:
    rgba(255,255,255,.6) 1px 1px 0,
    rgba(0,0,0,.3) 4px 4px 0;
}

.session-title,
.session-time,
.session-track,
.session-presenter {
  display: block;
}

.session-presenter {
  font-weight: 700;
}

// .session-title,
// .time-slot {
//   margin: 0;
//   font-size: 1em;
//   display: none;
//   flex-wrap: wrap;
// }

.session-title a {
  color: #fff;
  text-decoration-style: dotted;
  
  &:hover {
    font-style: italic;
  }
  
  &:focus {
    outline: 2px dotted rgba(255,255,255,.8);
  }
}

.day,
.track-slot,
.time-slot {
  font-weight: bold;
  font-size:1.75em;
}

.track-1 {
  background-color: #1259B2;
  color: #fff;
}

.track-2 {
  background-color: #687f00;
  color: #fff;
}

.track-3 {
  background-color: #544D69;
  color: #fff;
}

.track-4 {
  background-color: #c35500;
  color: #fff;
}

.track-5 {
  background-color: #00c3a3;
  color: #fff;
}

.track-6 {
  background-color: #7500c3;
  color: #fff;
}

.track-7 {
  background-color: #bd5a9f;
  color: #fff;
}

.track-all {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  color: #000;
  box-shadow: none;
}

.meta {
  color: #555;
  font-style: italic;
}

.meta a {
  color: #555;
}

hr {
  margin: 40px 0;
}
</style>