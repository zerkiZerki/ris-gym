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
          v-model="nazivUs"
          label="Naziv usluge *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Naziv usluge ne smije biti prazan']"
        />
        <q-input
          filled
          v-model="opisUs"
          label="Opis usluge *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite kratak opis usluge']"
        />
        <q-input
          filled
          v-model="cijenaUs"
          label="Cijena usluge *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Cijena usluge mora biti upisana!']"
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
      nazivUs: null,
      opisUs: null,
      cijenaUs: null,

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
          message: 'Spremljeno'
        })
      }
    },

    onReset () {
      this.nazivUs = null
      this.opisUs = null
      this.cijenaUs = null
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
