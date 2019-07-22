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
      title="Mjerenja članova"
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
          label: 'Ime',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: false
        },
        { name: 'Prezime', align: 'center', label: 'Prezime', field: 'prezime', sortable: true },
        { name: 'datum_mjerenja', label: 'Datum uzimanja mjerenja', field: 'datum_mjerenja', sortable: false },
        { name: 'visina', label: 'Visina', field: 'visina', sortable: true },
        { name: 'tezina', label: 'Težina', field: 'tezina', sortable: true },
        { name: 'razinaAkt', label: 'Razina aktivnosti', field: 'razinaAkt', sortable: true },
        { name: 'bmr', label: 'Indeks tjelesne mase', field: 'bmr', sortable: true },
        { name: 'tdee', label: 'Ukupna dnevna potrošnja kalorija', field: 'tdee', sortable: true }
        
      ],
      data: [
        {
          name: 'Tristan',
          prezime: 'King',
          datum_mjerenja: '',
          visina: 180,
          tezina: 85,
          razinaAkt: 4,
          bmr: 25,
          tdee: 1800
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
