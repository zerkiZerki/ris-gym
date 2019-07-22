<template>
  <q-page padding>
    <div class="q-pa-md middle" style="max-width: 400px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="imeClan"
          label="Ime člana *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite ime člana']"
        />
        <q-input
          filled
          v-model="prezimeClan"
          label="Prezime člana *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite prezime člana']"
        />
        <q-date
          v-model="rodjenjeClan"
          minimal
        />
        <q-input
          filled
          v-model="adresaClan"
          label="Adresa člana *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite adresu člana']"
        />
        <q-input
          filled
          v-model="emailClan"
          label="E-mail člana *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite e-mail adresu']"
        />
        <q-input
          filled
          v-model="mobClan"
          label="Broj mobitela *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite broj mobitela']"
        />
      <q-select v-model="nazivCl" :options="options" label="Željena članarina" />

        <div>
          <q-btn label="Spremi" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      imeClan: null,
      prezimeClan: null,
      rodjenjeClan: null,
      adresaClan: null,
      emailClan: null,
      mobClan: null,
      nazivCl: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.imeClan = null
      this.prezimeClan = null
      this.rodjenjeClan = null
      this.adresaClan = null
      this.emailClean = null
      this.mobClan = null
      this.nazivCl = null
      this.accept = false
    }
  }
}
</script>
<style>
.middle {
max-width: 500px;
margin: 0 auto;
}
</style>
