<template>
  <div class="q-pa-md middle" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="tezinaCl"
        label="Težina u kg *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Unesite tjelesnu težinu']"
      />
       <q-input
        filled
        v-model="visinaCl"
        label="Visina u cm *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Unesite visinu']"
      />
       <q-input
        filled
        v-model="bmr"
        label="Iznos BMR-a *"
      />
       <q-input
        filled
        v-model="tdee"
        label="Iznos TDEE-a *"
      />

      <div>
        <q-btn label="Spremi" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tezinaCl: null,
      visinaCl: null,
      bmr: null,
      tdee: null,

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
      this.visinaCl = null
      this.tezinaCl = null
      this.bmr = null
      this.tdee = null
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
