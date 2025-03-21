// Poison Forage; Requires Portal module
// The Tabletop Room
// Updated: 3/21/2025

// UUIDs of Roll Tables
//  common = Compendium.ebonmyst-extras.extras-tables.RollTable.mw4UDhWNAlDXiO9o
//  artic = Compendium.ebonmyst-extras.extras-tables.RollTable.HDMA5kN5NtMgUbej
//  desert = Compendium.ebonmyst-extras.extras-tables.RollTable.nbbbL18kqkhRvPGa
//  grassland = Compendium.ebonmyst-extras.extras-tables.RollTable.NsYRY9iGmLCig5E1
//  forest = Compendium.ebonmyst-extras.extras-tables.RollTable.Ln6VndBB43pTsFMu
//  hills = Compendium.ebonmyst-extras.extras-tables.RollTable.znjhPhC6uzjgcfSA
//  mountains = Compendium.ebonmyst-extras.extras-tables.RollTable.K985oj7UNvGlijGe
//  underground = Compendium.ebonmyst-extras.extras-tables.RollTable.IUvplJ7ilU1jK6tT
//  swamp = Compendium.ebonmyst-extras.extras-tables.RollTable.2rGgvwbCLXhNnU7k
//  water = Compendium.ebonmyst-extras.extras-tables.RollTable.k40YjjfPyXYxcK0R

async function rollPlants(type) {
  var commonTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.mw4UDhWNAlDXiO9o'
  var articTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.HDMA5kN5NtMgUbej'
  var desertTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.nbbbL18kqkhRvPGa'
  var grassTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.NsYRY9iGmLCig5E1'
  var forestTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.Ln6VndBB43pTsFMu'
  var hillTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.znjhPhC6uzjgcfSA'
  var mountTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.K985oj7UNvGlijGe'
  var underTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.IUvplJ7ilU1jK6tT'
  var swampTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.2rGgvwbCLXhNnU7k'
  var waterTable =
    'Compendium.ebonmyst-extras.extras-tables.RollTable.k40YjjfPyXYxcK0R'

  console.log(type)

  if (type === 'common') {
    var rollTable = commonTable
  } else if (type === 'artic') {
    var rollTable = articTable
  } else if (type === 'desert') {
    var rollTable = desertTable
  } else if (type === 'grass') {
    var rollTable = grassTable
  } else if (type === 'forest') {
    var rollTable = forestTable
  } else if (type === 'hills') {
    var rollTable = hillTable
  } else if (type === 'mountains') {
    var rollTable = mountTable
  } else if (type === 'underground') {
    var rollTable = underTable
  } else if (type === 'swamp') {
    var rollTable = swampTable
  } else {
    var rollTable = waterTable
  }

  const table = await fromUuid(rollTable)
  await table.draw()
}

const formBuilder = new Portal.FormBuilder()

formBuilder
  .title('Poison Ingredient Foraging')
  .info('Select a biome')
  .button({
    label: 'Common',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('common')
      this.close()
    },
  })
  .button({
    label: 'Artic',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('artic')
      this.close()
    },
  })
  .button({
    label: 'Desert',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('desert')
      this.close()
    },
  })
  .button({
    label: 'Grassland',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('grass')
      this.close()
    },
  })
  .button({
    label: 'Forest',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('forest')
      this.close()
    },
  })
  .button({
    label: 'Hills',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('hills')
      this.close()
    },
  })
  .button({
    label: 'Mountains',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('mountains')
      this.close()
    },
  })
  .button({
    label: 'Underground',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('underground')
      this.close()
    },
  })
  .button({
    label: 'Swamp',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('swamp')
      this.close()
    },
  })
  .button({
    label: 'Water',
    icon: 'fas fa-leaf',
    callback: function (e) {
      rollPlants('water')
      this.close()
    },
  })
  // Disable the submit button
  .submitButton({ enabled: false })
  .render()
