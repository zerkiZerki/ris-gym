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
      title="Članarine"
      :data="data"
      :columns="columns"
      row-key="name"
      :separator="separator"
    />
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      separator: 'horizontal',

      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Naziv',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Opis', align: 'center', label: 'Opis', field: 'opis', sortable: false },
        { name: 'Cijena', label: 'Cijena (u kunama)', field: 'cijena', sortable: true },
        { name: 'Trajanje', label: 'Trajanje (u danima)', field: 'trajanje', sortable: false }
      ],
      data: [
        {
          name: 'Članarina 1',
          opis: 'Sissi',
          cijena: 220,
          trajanje: 30
        },
        {
          name: 'Članarina 2',
          opis: 'Druga članarina',
          cijena: 250
        }
      ]
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
