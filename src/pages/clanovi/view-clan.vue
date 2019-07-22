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
      title="Članovi"
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
        { name: 'rodjenje_clan', label: 'Datum rođenja', field: 'rodjenje_clan', sortable: true },
        { name: 'adresa_clan', label: 'Adresa stanovanja', field: 'adresa_clan', sortable: false },
        { name: 'mob_clan', label: 'Broj mobitela', field: 'mob_clan', sortable: false },
        { name: 'email_clan', label: 'E-mail adresa', field: 'email_clan', sortable: false }
      ],
      data: [
        {
          name: 'Tristan',
          prezime: 'King',
          rodjenje_clan: '20.05.1994',
          adresa_clan: 'oporovečka 2, Zagreb',
          mob_clan: '0925828222',
          email_clan: 'tking@gmail.com'
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
