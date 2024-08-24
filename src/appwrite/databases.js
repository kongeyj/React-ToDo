import { databases, collections } from './config'
import { ID } from 'appwrite'

const db = {}

collections.forEach((collection) => {
  db[collection.name] = {
    create: async (name, id = ID.unique()) => {
      return await databases.createDocument(
        collection.dbId,
        collection.id,
        id,
        name
      )
    },
    update: async (id, data) => {
      return await databases.updateDocument(
        collection.dbId,
        collection.id,
        id,
        data
      )
    },
    delete: async (id) => {
      return await databases.deleteDocument(collection.dbId, collection.id, id)
    },
    get: async (id) => {
      return await databases.getDocument(collection.dbId, collection.id, id)
    },
    list: async (queries) => {
      return await databases.listDocuments(
        collection.dbId,
        collection.id,
        queries
      )
    },
  }
})

export { db }
