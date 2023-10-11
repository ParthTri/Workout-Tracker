/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s5dacwiya4li9h0",
    "created": "2023-10-11 07:14:56.834Z",
    "updated": "2023-10-11 07:14:56.834Z",
    "name": "Stats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lfd9pwij",
        "name": "Item",
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
        "id": "kbnspisd",
        "name": "Measurement",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("s5dacwiya4li9h0");

  return dao.deleteCollection(collection);
})
