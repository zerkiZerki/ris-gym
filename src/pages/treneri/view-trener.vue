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
      title="Treneri"
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
        { name: 'rodjenje_trener', label: 'Datum rođenja', field: 'rodjenje_trener', sortable: true },
        { name: 'adresa_trener', label: 'Adresa stanovanja', field: 'adresa_trener', sortable: false },
        { name: 'mob_trener', label: 'Broj mobitela', field: 'mob_trener', sortable: false },
        { name: 'email_trener', label: 'E-mail adresa', field: 'email_trener', sortable: false }
      ],
      data: [
        {
          name: 'Dejan',
          prezime: 'Stipić',
          rodjenje_clan: '20.09.1994',
          adresa_clan: 'Ilica 2, Zagreb',
          mob_clan: '0925828222',
          email_clan: 'dstipke@gmail.com'
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
