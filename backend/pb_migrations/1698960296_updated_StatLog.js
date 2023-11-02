/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fbnkpjgmfxyv9f6")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xombvm6n",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fbnkpjgmfxyv9f6")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xombvm6n",
    "name": "Date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
