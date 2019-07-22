<template>
    <q-page padding>
        <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="[
        { label: 'Horizontal (default)', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' },
      ]"
    />

    <q-table
      id="prostor-list"
      title="Prostori"
      :data="test"
      :columns="columns"
      row-key="name"
      :separator="separator"
    />
    </q-page>
</template>

<script>
export default {
  // created () {
  //   const collectionRef = this.$db.collection("Prostor")
  //   collectionRef.get().then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //         debugger
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, " => ", doc.data());
  //       });
  //     }); 
  // },
  mounted () {
    console.log(this.test)
  },
  data () {
    return {
      separator: 'horizontal',

      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Naziv prostora',
          align: 'left',
          field: row => row.Naziv_prostora,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Opis', label: 'Opis prostora', field: row => row.Opis_prostora, sortable: false }
      ],
      data: [
        {
          name: 'Dvorana 1',
          opis: 'Hihihih',
        },
        {
          name: 'Dvorana 2',
          opis: 'Heheheh'
        }
      ],
      test: null
    }
  },
  firestore () {
    const prostoriRef = this.$db.collection('Prostor')
    return {
      test: prostoriRef
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
