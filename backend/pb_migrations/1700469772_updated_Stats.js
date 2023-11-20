/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s5dacwiya4li9h0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwtuwnyq",
    "name": "Active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s5dacwiya4li9h0")

  // remove
  collection.schema.removeField("cwtuwnyq")

  return dao.saveCollection(collection)
})
