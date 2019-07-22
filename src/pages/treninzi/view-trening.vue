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
      title="Treninzi"
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
        { name: 'Vrsta', label: 'Vrsta treninga', field: 'vrsta', sortable: true },
        { name: 'Prostor', label: 'Prostor za održavanje treninga', field: 'prostor', sortable: true }
      ],
      data: [
        {
          name: 'Crossfit',
          opis: 'Kondicijski trening snage i izdržljivosti',
          vrsta: 'Grupni trening',
          prostor: 'Dvorana 1'
        },
        {
          name: 'Pilates',
          opis: 'Kondicijski trening sa laganim težinama',
          vrsta: 'Grupni trening',
          prostor: 'Dvorana 2'
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
