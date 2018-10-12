<template>
<div id="app">
    <div class="asmi-grid">
      <div class="asmi-cell" v-for="team in teams" v-bind:key="team.name">
        
        <h3>{{team.name}}</h3>
      </div>
    </div>
    <!-- <ui-cell style="grid-column: 1/12;" > -->
      
      <!-- <ui-card outlined class="demo-card">
        <div :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">Headlines</div>
        <hr class="mdc-list-divider">

        <template v-for="member in team.members">
          <a class="demo-card-article" v-ripple>
            <h2 :class="[$tt('headline5'), 'demo-card-article__title']">{{ member.personal[0].value }}</h2>
            <p class="demo-card-article__snippet">{{ member.personal[1].value }}</p>
          </a>
          <hr class="mdc-list-divider">
        </template>

        <ui-card-actions fullBleed>
          <ui-link actionButton class="demo-card-action">
            All Business Headlines
            <ui-icon>arrow_forward</ui-icon>
          </ui-link>
        </ui-card-actions>
      </ui-card>   -->
      <!-- </ui-cell> -->
      <!-- <ui-list v-for="member in team.members" v-bind:key="member.RowKey">
        <ui-grid class="demo-grid">
        <ui-grid-cell>
          
        <h4>Personal</h4>
          <ui-list v-for="p in member.personal" v-bind:key="p.id">
            <ui-item>
              <ui-item-text>{{p.q}}</ui-item-text>
              <ui-item-subtext>{{p.value}}</ui-item-subtext>
            </ui-item>
          </ui-list>
        </ui-grid-cell>
        <ui-grid-cell>
        
        <h4>XP</h4>
        <ui-list v-for="p in member.xp" v-bind:key="p.id">
          <ui-item>
            <ui-item-text>{{p.q}}</ui-item-text>
            <ui-item-subtext>{{p.value}}</ui-item-subtext>
          </ui-item>
        </ui-list>
        </ui-grid-cell>
        <ui-grid-cell>

        <h4>Tech</h4>
        <ui-list v-for="p in member.technical" v-bind:key="p.id">
          <ui-item>
            <ui-item-text>{{p.q}}</ui-item-text>
            <ui-item-subtext>{{p.value}}</ui-item-subtext>
          </ui-item>
        </ui-list>
        </ui-grid-cell>
      </ui-grid>
      </ui-list> -->
      
    <!-- </ui-grid> -->
</div>
</template>

<script>
import Hello from '../components/hello';
import logo from '../../assets/logo.png';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Hello
  },
  data() {
    return {
      logo,
      teams: []
    };
  },
  created() {
    axios
      .get('https://asmiteam.azurewebsites.net/api/getallteams')
      .then(response => {
        var teams = response.data.teams;
        var members = response.data.members;
        this.teams = teams
          .map(t => {
            var mArr = members
              .map(m => {
                console.log(m.data);
                if (m.PartitionKey == t.RowKey) {
                  return JSON.parse(m.data);
                } else return {};
              })
              .filter(m => {
                return m.personal !== undefined;
              });

            return {
              name: t.name,
              members: mArr
            };
          })
          .filter(t => {
            return t.members.length > 0;
          });
      });
  }
};
</script>

<style>
.asmi-grid {
  display: grid;
  grid-template-columns: [col] 50% [col] 50%;
}

.asmi-cell {
  /* grid-column: 1/4; */
}
</style>
