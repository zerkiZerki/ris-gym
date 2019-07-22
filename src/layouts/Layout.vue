<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Informacijski sustav teretane
        </q-toolbar-title>
        <q-btn icon-right="home" to="/" ></q-btn>
        <q-btn icon-right="account_circle" label="Login" to="/PageAuth" ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-3"
    >
    <q-list>
      <q-item-label header>Izbornik</q-item-label>
      <q-expansion-item
        group="mylayoutgroup"
        expand-separator
        icon="fitness_center"
        label="Treninzi"
        caption="Unos i pregled + termini treninga"
        default-closed
        class="text-secondary"
      >
        <q-item
        to="/input-trening"
        clickable
        v-ripple
        class="text-primary"
        >
        <q-item-section avatar><q-icon name="add_box" /></q-item-section>
        <q-item-section>Novi trening</q-item-section>
      </q-item>
      <q-item
      to="/view-trening"
        clickable
        v-ripple
        class="text-primary"

      >
        <q-item-section avatar><q-icon name="directions_run" /></q-item-section>
        <q-item-section>Pregled treninga</q-item-section>
      </q-item>

      <q-expansion-item
          :header-inset-level="1"
          group="mylayoutgroupchild"
          expand-separator
          icon="watch_later"
          label="Termini treninga"
          default-closed
          class="text-secondary"
        >
        <q-item
        to="/input-termin"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="insert_invitation" /></q-item-section>
        <q-item-section>Novi termin</q-item-section>
      </q-item>
      <q-item
      to="/view-termin"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="calendar_today" /></q-item-section>
        <q-item-section>Pregled termina</q-item-section>
      </q-item>
        </q-expansion-item>
      </q-expansion-item>
      <q-expansion-item
        group="mylayoutgroup"
        expand-separator
        icon="people_outline"
        label="Članovi"
        caption="Unos i pregled + mjerenja"
        default-closed
        class="text-secondary"
      >
        <q-item
        to="/input-clan"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="person_add" /></q-item-section>
        <q-item-section>Novi član</q-item-section>
      </q-item>
      <q-item
      to="/view-clan"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="recent_actors" /></q-item-section>
        <q-item-section>Pregled članova</q-item-section>
      </q-item>

      <q-expansion-item
          :header-inset-level="1"
          group="mylayoutgroupchild"
          expand-separator
          icon="assignment"
          label="Mjerenja"
          default-closed
          class="text-secondary"
        >
        <q-item
        to="/input-mjerenja"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Novo mjerenje</q-item-section>
      </q-item>
      <q-item
      to="/view-mjerenja"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note" /></q-item-section>
        <q-item-section>Pregled mjerenja</q-item-section>
      </q-item>
        </q-expansion-item>
      </q-expansion-item>
      <q-expansion-item
        group="mylayoutgroup"
        expand-separator
        icon="spa"
        label="Usluge"
        caption="Unos i pregled"
        default-closed
        class="text-secondary"
      >
        <q-item
        to="/input-usluge"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="add_box" /></q-item-section>
        <q-item-section>Nova usluga</q-item-section>
      </q-item>
      <q-item
      to="/view-usluge"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="folder_special" /></q-item-section>
        <q-item-section>Pregled usluga</q-item-section>
      </q-item>

      </q-expansion-item>
       <q-expansion-item
        group="mylayoutgroup"
        expand-separator
        icon="people"
        label="Treneri"
        caption="Unos i pregled"
        default-closed
        class="text-secondary"
      >
        <q-item
        to="/input-trener"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="person_add" /></q-item-section>
        <q-item-section>Unos trenera</q-item-section>
      </q-item>
      <q-item
        to="/view-trener"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="recent_actors" /></q-item-section>
        <q-item-section>Pregled trenera</q-item-section>
      </q-item>

      </q-expansion-item>

      <q-expansion-item
        group="mylayoutgroup"
        expand-separator
        icon="star"
        label="Članarine"
        caption="Unos i pregled"
        default-closed
        class="text-secondary"
      >
        <q-item
        to="/input-clanarine"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="add_box" /></q-item-section>
          <q-item-section>Nova članarina</q-item-section>
      </q-item>
      <q-item
        to="/view-clanarine"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="stars" /></q-item-section>
        <q-item-section>Pregled članarina</q-item-section>
      </q-item>

      </q-expansion-item>
      <q-expansion-item
        expand-separator
        group="mylayoutgroup"
        icon="domain"
        label="Prostori"
        caption="Unos i pregled"
        default-closed
        class="text-secondary"
      >
        <q-item
        to="/input-prostor"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="add_box" /></q-item-section>
        <q-item-section>Novi prostor</q-item-section>
      </q-item>
      <q-item
        to="/view-prostor"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="meeting_room" /></q-item-section>
        <q-item-section>Pregled prostora</q-item-section>
      </q-item>

      </q-expansion-item>
      <q-expansion-item
        expand-separator
        group="mylayoutgroup"
        icon="print"
        label="Izvještaji"
        caption="Izrada izvještaja"
        default-closed
        class="text-secondary"
      >
      <q-expansion-item
          :header-inset-level="1"
          group="mylayoutgroupchild"
          expand-separator
          icon="people_outline"
          label="Izvještaji o članovima"
          default-closed
          class="text-secondary"
        >
        <q-item
        to="/rpt-clanovi-mjerenja"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Izvještaj o mjerenjima članova</q-item-section>
      </q-item>
      <q-item
      to="/rpt-clanovi-clanarine"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Izvještaj o članarinama članova</q-item-section>
      </q-item>
      <q-item
        to="/rpt-clanovi-podaci"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Izvještaj o osobnim podacima članova</q-item-section>
      </q-item>
      <q-item
        to="/rpt-clanovi-usluge"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Izvještaj o izvršenim uslugama članova</q-item-section>
      </q-item>
        </q-expansion-item>
      <q-expansion-item
          :header-inset-level="1"
          group="mylayoutgroupchild"
          expand-separator
          icon="fitness_center"
          label="Izvještaji o treninzima"
          default-closed
          class="text-secondary"
        >
        <q-item
        to="/rpt-treninzi-termini"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Izvještaj o terminima treninga</q-item-section>
      </q-item>
      <q-item
        to="/rpt-treninzi-prostori"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Izvještaj o rasporedu prostora za održavanje treninga</q-item-section>
      </q-item>
        </q-expansion-item>
        <q-item
        to="/rpt-clanarine"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Ponuda članarina</q-item-section>
      </q-item>
        <q-item
        to="/rpt-usluge"
        clickable
        v-ripple
        class="text-primary"
      >
        <q-item-section avatar><q-icon name="note_add" /></q-item-section>
        <q-item-section>Ponuda usluga</q-item-section>
      </q-item>
      </q-expansion-item>
      <q-item
        to="/info"
        clickable
        v-ripple
        class="text-secondary"
      >
        <q-item-section avatar><q-icon name="info" /></q-item-section>
        <q-item-section>Info</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
