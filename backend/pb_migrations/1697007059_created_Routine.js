/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nycy0ti1fd6tm5g",
    "created": "2023-10-11 06:50:59.182Z",
    "updated": "2023-10-11 06:50:59.182Z",
    "name": "Routine",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgqbyrqc",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nycy0ti1fd6tm5g");

  return dao.deleteCollection(collection);
})
