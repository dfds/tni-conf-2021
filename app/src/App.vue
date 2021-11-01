<template>
  <div id="app">
    <h1>DFDS T&I Conference 2021</h1>
    <div :is="currentComponent" v-on:swapcomponent="swapComponent" :currentcomponentpayload="currentComponentPayload" :events="schedule"></div>
    <!-- <ConfViewer :events="events" /> -->
  </div>
</template>

<script>
import ConfViewer from './components/ConfViewer.vue';
import LandingPage from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
    ConfViewer,
    LandingPage
  },
  data() {
    return {
      currentComponent: "LandingPage",
      currentComponentPayload: {},
      timer: '',
      schedule: []
    }
  },
  methods: {
    swapComponent: function(component, payload) {
      const el = document.body;

      if (component.valueOf() === "ConfViewer") {
        this.currentComponentPayload = this.events;
        el.classList.add('conference');
      } else {
        el.className = '';
      }

      this.currentComponent = component;
    },
    fetchEventsList () {
      fetch("https://dfds-ti-conf-data.s3.eu-central-1.amazonaws.com/schedule.json")
        .then(resp => resp.json())
        .then(data => {
          this.schedule = data;
        });
    },
    cancelAutoUpdate () {
        clearInterval(this.timer);
    }        
  },
  
  created: function() {
    this.fetchEventsList();
    this.timer = setInterval(this.fetchEventsList, 40000);
  },
  beforeDestroy: function() {
    this.cancelAutoUpdate();
  }  
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';

  .content, .events {
    margin: 0 auto;

    .menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 768px;
      margin: 0 auto;
      margin-bottom: 20px;

      @media screen and (min-width:768px) {
        margin-bottom: 32px;
      }
    }

    .banner {
      max-width: 1024px;
      margin: 0 auto;
      margin-bottom: 20px;

      @media screen and (min-width:768px) {
        margin-bottom: 32px;
      }
    }

    .text {
      max-width: 768px;
      margin: 0 auto;

      p {
        margin-bottom: 12px;
      }
    }
  }

  h1 {
    margin-bottom: 32px;
  }

  .btn {
    width: 100%;
    background:transparent;
    border: 2px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 1;
    margin: 0 0 10px;
    padding: 15px 25px;
    font-size: 1.8rem;
    text-align: center;
    text-decoration: none;
    display:flex;
    justify-content: center;
    align-items: center;
    outline:none;
    text-shadow:0 1px 1px rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.2s ease-in-out 0s;
    -moz-transition: all 0.2s ease-in-out 0s;
    -ms-transition: all 0.2s ease-in-out 0s;
     transition: all 0.2s ease-in-out 0s;

    @media screen and (min-width:768px) {
      width: auto;
      margin: 0 10px;
    }
  }

  .green:hover{
    background:#13d7ae;
  }
  .green:active, .green:focus{
    background:#0fae8d;
  }
  .light-green{
    background:#87bc58;
    color:#fff;
    box-shadow: 0 3px 0 #6ea140;    
  }
  .light-green:hover{
    background:#c0da82;    
  }
  .light-green:active, .light-green:focus{
    background:#7fb84d;    
  }
  .orange{
    background:#e77e22;
    color:#fff;
    box-shadow: 0 3px 0 #c16515;
  }
  .orange:hover{
    background:#f6b417;    
  }
  .orange:active, .orange:focus{
    background:#dd7418;    
  }
  .blue{
    background:#3cbce1;
    color:#fff;
    box-shadow: 0 3px 0 #1fa4cb;
  }
  .blue:hover{
    background:#56d7ed;    
  }
  .blue:active, .blue:focus{
    background:#2fb7df;    
  }
  .purple{
    background:#9a59b5;
    color:#fff;
    box-shadow: 0 3px 0 #7f4497;
  }
  .purple:hover{
    background:#c472e6;    
  }
  .purple:active, .purple:focus{
    background:#944fb0;    
  }
  .yellow{
    background:#fac75a;
    color:#fff;
    box-shadow: 0 3px 0 #f9b629;
  }
  .yellow:hover{
    background:#fce17a;    
  }
  .yellow:active, .yellow:focus{
    background:#fac24b;    
  }
  .grey{
    background:#4c4c4c;
    color:#fff;
    box-shadow: 0 3px 0 #333333;
  }
  .grey:hover{
    background:#747373;    
  }
  .grey:active, .grey:focus{
    background:#444444;    
  }
  .red{
    background:#e84c3d;
    color:#fff;
    box-shadow: 0 3px 0 #d82a1a;
  }
  .red:hover{
    background:#f57b8a;    
  }
  .red:active, .red:focus{
    background:#e63b2b;    
  }
  .dark-blue{
    background:#34495e;
    color:#fff;
    box-shadow: 0 3px 0 #22303d;
  }
  .dark-blue:hover{
    background:#425c77;    
  }
  .dark-blue:active, .dark-blue:focus{
    background:#2f4154;    
  }
  .ash-grey{
    background:#bec3c7;
    color:#fff;
    box-shadow: 0 3px 0 #a3aaaf;
  }
  .ash-grey:hover{
    background:#d0d5d9;    
  }
  .ash-grey:active, .ash-grey:focus{
    background:#b0b6bb;    
  }  
</style>
