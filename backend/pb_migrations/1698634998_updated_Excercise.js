/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdyys4l6ca9vhz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wzlkd93",
    "name": "Weight",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sdyys4l6ca9vhz3")

  // remove
  collection.schema.removeField("1wzlkd93")

  return dao.saveCollection(collection)
})
