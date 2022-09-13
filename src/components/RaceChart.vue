<template>
    <div>
        <div class="flex-row justify-content-between d-flex mb-4">
            <h3>U.S. Race + Ethnicity</h3>
        
            <h4>Based on 8K U.S. employees</h4>            
        </div>  
      
        <div class="bar">
            <h6 class="title"><span>Asian</span></h6>

            <VmProgress
            :percentage="activeRace['asian']"
            stroke-width="40"
            stroke-color="#531045"
            >
            </VmProgress>
        </div>
        
              
        <div class="bar">
            <h6 class="title"><span>Black / African American</span></h6>

            <VmProgress 
            :percentage="activeRace['black']"
            stroke-width="40"
            stroke-color="#e0bf38">
            </VmProgress>
        </div>
        
              
        <div class="bar">
            <h6 class="title"><span>Hispanic / Latinx</span></h6>

            <VmProgress 
            :percentage="activeRace['hispanic']"
            stroke-width="40"
            stroke-color="#641624">
            </VmProgress>
        </div>
        
        
        <div class="bar">
            <h6 class="title"><span>Multiracial, Native American and Pacific Islander  </span></h6>

            <VmProgress 
            :percentage="activeRace['multiracial']"
            stroke-width="40"
            stroke-color="#cc8130">
            </VmProgress>
        </div>
        
        
        <div class="bar">
            <h6 class="title"><span>White</span></h6>

            <VmProgress 
            :percentage="activeRace['white']"
            stroke-width="40"
            stroke-color="#9e3033">
            </VmProgress>
        </div>
                    
        
        
        <div class="bar">
            <h6 class="title"><span>Undisclosed</span></h6>

            <VmProgress 
            :percentage="activeRace['undisclosed']"
            stroke-width="40"
            stroke-color="#898a8f">
            </VmProgress>
        </div>
        
        <div class="filter-group">
            <button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'all'}"  @click="setCategory('all')">
                <span>Overall</span>
            </button>
            
            <button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'peopleManager'}" @click="setCategory('peopleManager')">
                <span>People Managers</span>
            </button>
            
            <button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'engineers'}" @click="setCategory('engineers')">
                <span>Individual Contributors</span>
            </button>
            
            <button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'individualContributor'}" @click="setCategory('individualContributor')">
                <span>Engineers</span>
            </button>
            
            <button class="btn btn-outline-dark rounded-pill" :class="{active: activeCat === 'manufacturingAssociates'}" @click="setCategory('manufacturingAssociates')">
                <span>Manufacturing Associates</span>
            </button>
        </div>
    </div>
  </template>
  
  <script>
  import { race } from "@/assets/mock_data/mockData.js";
  
  export default {
    data() {
        return {
            activeRace: race["all"],
            activeCat: "all"
        }
    },
    methods: {
        setCategory(cat) {
            this.activeCat = cat;
            this.activeRace = race[cat];
        }
    }
  };
  </script>
  
  <style lang="scss" scoped>
    .vm-progress-bar__outer {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .vm-progress-bar__inner {
        border-radius: 0;
    }
  </style>