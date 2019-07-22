<template>
  <q-page padding>
    <div class="q-pa-md middle" style="max-width: 400px">

      <q-form
        @submit.prevent="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="username"
          label="Korisničko ime *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite korisničko ime']"
        />
        <q-input
          filled
          type="password"
          v-model="password"
          label="Lozinka *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite lozinku']"
        />

        <div>
          <q-btn label="Spremi" type="submit" color="primary" />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },

  methods: {
    onSubmit () {
     console.log('Submitted')
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
