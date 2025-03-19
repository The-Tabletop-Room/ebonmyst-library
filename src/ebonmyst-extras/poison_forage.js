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

new Dialog({
  title: 'My Dialog Title',
  content: 'My dialog content',
  buttons: {
    common: {
      label: 'Common',
      callback: () => rollPlants('common'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    artic: {
      label: 'Artic',
      callback: () => rollPlants('artic'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    desert: {
      label: 'Desert',
      callback: () => rollPlants('desert'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    grassland: {
      label: 'Grassland',
      callback: () => rollPlants('grass'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    forest: {
      label: 'Forest',
      callback: () => rollPlants('forest'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    hills: {
      label: 'Hills',
      callback: () => rollPlants('hills'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    mountains: {
      label: 'Mountains',
      callback: () => rollPlants('mountains'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    underground: {
      label: 'Underground',
      callback: () => rollPlants('underground'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    swamp: {
      label: 'Swamp',
      callback: () => rollPlants('swamp'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
    water: {
      label: 'Water',
      callback: () => rollPlants('water'),
      icon: `<i class="fas fa-leaf"></i>`,
    },
  },
}).render(true)
