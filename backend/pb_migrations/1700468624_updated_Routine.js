/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nycy0ti1fd6tm5g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfhm8fye",
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
  const collection = dao.findCollectionByNameOrId("nycy0ti1fd6tm5g")

  // remove
  collection.schema.removeField("qfhm8fye")

  return dao.saveCollection(collection)
})
