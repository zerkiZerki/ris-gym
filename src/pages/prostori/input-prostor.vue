<template>
  <q-page padding>
    <div class="q-pa-md middle" style="max-width: 400px">

      <q-form
        id="add-prostor"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="nazivPr"
          label="Naziv prostora *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Naziv prostora ne smije biti prazan']"
        />
        <q-input
          filled
          v-model="opisPr"
          label="Opis prostora *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Ukratko opišite prostor']"
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
      nazivPr: null,
      opisPr: null,
      accept: true
    }
  },
  methods: {
    onSubmit () {
      const collectionRef = this.$db.collection("Prostor")
      collectionRef.add({
          Naziv_prostora: this.nazivPr,
          Opis_prostora: this.opisPr
        })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },

    onReset () {
      this.nazivPr = null
      this.opisPr = null
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
