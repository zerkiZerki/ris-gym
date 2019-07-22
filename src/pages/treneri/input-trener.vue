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
          v-model="imeTrener"
          label="Ime trenera *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite ime trenera']"
        />
        <q-input
          filled
          v-model="prezimeTrener"
          label="Prezime trenera *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite prezime trenera']"
        />
        <q-date
          v-model="rodjenjeTrener"
          minimal
        />
        <q-input
          filled
          v-model="adresaTrener"
          label="Adresa trenera *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite adresu trenera']"
        />
        <q-input
          filled
          v-model="emailTrener"
          label="E-mail adresa trenera *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite e-mail adresu']"
        />
        <q-input
          filled
          v-model="mobTrener"
          label="Broj mobitela *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite broj mobitela']"
        />
        <q-input
          filled
          v-model="edukacijaTrener"
          label="Edukacija trenera *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite gdje ste se educirali']"
        />

        <div>
          <q-btn label="Spremi" @click="onSubmit" color="primary"/>
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
      imeTrener: null,
      prezimeTrener: null,
      rodjenjeTrener: null,
      adresaTrener: null,
      emailTrener: null,
      mobTrener: null,
      edukacijaTrener: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      console.log(this.rodjenjeTrener)
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
      this.imeTrener = null
      this.prezimeTrener = null
      this.rodjenjeTrener = null
      this.adresaTrener = null
      this.emailTrener = null
      this.mobTrener = null
      this.edukacijaTrener = null
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
