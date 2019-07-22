<template>
  <q-page class="flex flex-center">
    <img alt="Crossfit" src="statics/crossfit.jpg">
    <q-btn label="Prompt" color="primary" @click="prompt = true" />
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section>
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
 data () {
    return {
      alert: false,
      confirm: false,
      prompt: false,

      address: ''
    }
  }
}
</script>

<style>
</style>
