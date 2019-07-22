const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
  path: '/input-clanarine',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/clanarine/input-clanarine.vue') }
  ]
},
{
  path: '/view-clanarine',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/clanarine/view-clanarine.vue') }
  ]
},
{
  path: '/input-clan',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/clanovi/input-clan.vue') }
  ]
},
{
  path: '/view-clan',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/clanovi/view-clan.vue') }
  ]
},
{
  path: '/input-mjerenja',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/clanovi/mjerenja-clanova/input-mjerenja.vue') }
  ]
},
{
  path: '/view-mjerenja',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/clanovi/mjerenja-clanova/view-mjerenja.vue') }
  ]
},
{
  path: '/input-prostor',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/prostori/input-prostor.vue') }
  ]
},
{
  path: '/view-prostor',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/prostori/view-prostor.vue') }
  ]
},
{
  path: '/input-termin',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/termini-treninga/input-termin.vue') }
  ]
},
{
  path: '/view-termin',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/termini-treninga/view-termin.vue') }
  ]
},
{
  path: '/input-trener',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/treneri/input-trener.vue') }
  ]
},
{
  path: '/view-trener',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/treneri/view-trener.vue') }
  ]
},
{
  path: '/input-trening',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/treninzi/input-trening.vue') }
  ]
},
{
  path: '/view-trening',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/treninzi/view-trening.vue') }
  ]
},
{
  path: '/input-usluge',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/usluge/input-usluge.vue') }
  ]
},
{
  path: '/view-usluge',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/usluge/view-usluge.vue') }
  ]
},
{
  path: '/info',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/info.vue') }
  ]
},
{
  path: '/rpt-clanarine',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/rpt-clanarine.vue') }
  ]
},
{
  path: '/rpt-usluge',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/rpt-usluge.vue') }
  ]
},
{
  path: '/rpt-treninzi-prostori',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/treninzi/rpt-prostori.vue') }
  ]
},
{
  path: '/rpt-treninzi-termini',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/treninzi/rpt-termini.vue') }
  ]
},
{
  path: '/rpt-clanovi-clanarine',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/clanovi/rpt-clanarine-clanovi.vue') }
  ]
},
{
  path: '/rpt-clanovi-podaci',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/clanovi/rpt-clanovi.vue') }
  ]
},
{
  path: '/rpt-clanovi-mjerenja',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/clanovi/rpt-mjerenja.vue') }
  ]
},
{
  path: '/rpt-clanovi-usluge',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/izvjestaji/clanovi/rpt-usluge-clanovi.vue') }
  ]
},
{
  path: '/PageAuth',
  component: () => import('layouts/Layout.vue'),
  children: [
    { path: '', component: () => import('pages/PageAuth.vue') }
  ]
}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
