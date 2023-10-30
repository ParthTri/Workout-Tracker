/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etpn2ymdzmqhbqa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7kbmikmm",
    "name": "weight",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etpn2ymdzmqhbqa")

  // remove
  collection.schema.removeField("7kbmikmm")

  return dao.saveCollection(collection)
})
