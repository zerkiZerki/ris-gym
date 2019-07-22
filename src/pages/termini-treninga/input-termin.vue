<template>
  <q-page padding>
    <div class="q-pa-md middle" style="max-width: 400px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
      <q-select v-model="nazivTr" :options="options" label="Treninzi" />
        <q-input
          filled
          v-model="clanoviTer"
          label="Članovi na terminu *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Unesite broj prisutnih članova']"
        />
      <q-date
          v-model="datumTer"
          minimal
        />
        <q-input filled v-model="time" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="time" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

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
      datumTer: '',
      accept: false,
      clanoviTer: null,
      options: [
      ]
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
      this.datumTer = null
      this.clanoviTer = null
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
