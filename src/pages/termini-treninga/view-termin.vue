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
      title="Termini treninga"
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
          label: 'Naziv treninga',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'vrijeme', align: 'center', label: 'Vrijeme treninga', field: 'vrijeme', sortable: true },
        { name: 'brClan', label: 'Broj prisutnih članova', field: 'brClan', sortable: true }
      ],
      data: [
        {
          name: 'Cross',
          vrijeme: '',
          brClan: 20
        },
        {
          name: 'Pilates',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
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
