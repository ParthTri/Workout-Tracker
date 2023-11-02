/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s5dacwiya4li9h0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hyc1co5y",
    "name": "Unit",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s5dacwiya4li9h0")

  // remove
  collection.schema.removeField("hyc1co5y")

  return dao.saveCollection(collection)
})
