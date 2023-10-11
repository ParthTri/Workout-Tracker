/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sdyys4l6ca9vhz3",
    "created": "2023-10-11 06:51:52.547Z",
    "updated": "2023-10-11 06:51:52.547Z",
    "name": "Excercise",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ef0nbtxj",
        "name": "Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nwdy0fix",
        "name": "RoutineID",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "nycy0ti1fd6tm5g",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("sdyys4l6ca9vhz3");

  return dao.deleteCollection(collection);
})
