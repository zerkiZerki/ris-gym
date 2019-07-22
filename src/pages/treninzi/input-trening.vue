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
          v-model="nazivTr"
          label="Naziv treninga *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite naziv treninga']"
        />
        <q-input
          filled
          v-model="vrstaTr"
          label="Vrsta treninga *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite vrstu treninga']"
        />
        <q-input
          filled
          v-model="opisTr"
          label="Opis treninga *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Ukratko opišite trening']"
        />

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
      nazivTr: null,
      vrstaTr: null,
      opisTr: null,

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
      this.nazivTr = null
      this.opisTr = null
      this.vrstaTr = null
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
