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
          v-model="nazivCl"
          label="Naziv članarine *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite naziv članarine']"
        />
          <q-input
          filled
          v-model="cijenaCl"
          label="Cijena članarine *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite cijenu članarine']"
        />
          <q-input
          filled
          v-model="opisCl"
          label="Opis članarine *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite kratak opis članarine']"
        />
          <q-input
          filled
          v-model="trajanjeCl"
          label="Trajanje članarine *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite broj dana trajanja članarine']"
        />
      <div class="q-gutter-sm">
      </div>

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
      nazivCl: null,
      opisCl: null,
      trajanjeCl: null,
      cijenaCl: null,

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
      this.nazivCl = null
      this.opisCl = null
      this.trajanjeCl = null
      this.cijenaCl = null
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
