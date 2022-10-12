const { Directus } = require('@directus/sdk')
require('dotenv').config()

// Fetch the schema and sample data from JSON files to seed the project
const collections = require('./collections.json')
const fields = require('./fields.json')
const relations = require('./relations.json')
const sampleData = require('./items.json')

const url = process.env.DIRECTUS_URL //'http://localhost:8055'
const token = process.env.DIRECTUS_ADMIN_TOKEN // 'MTYJ-GdUG0SrJG0FFoGDHV5ICZeGciJK'

const directus = new Directus(url, {
  auth: {
    staticToken: token,
  },
})

// Create all the different functions for different API calls
async function createCollections(collections) {
  try {
    const { data: collectionsCreated } = await directus.collections.createMany(
      collections
    )
    console.log('Collections created:', collectionsCreated.length)
  } catch (error) {
    console.log(error)
  }
}

async function createFields(fields) {
  //   The fields data is an object with collection names as keys and an array of fields as values. So we'll loop through the object and create fields for each collection.
  for (const collection in fields) {
    // Directus API doesn't support creating fields in bulk. So we need to create them one by one.
    for (const field of fields[collection]) {
      try {
        const data = await directus.fields.createOne(collection, field)
        console.log('Field created:', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

async function createRelations(relations) {
  // Directus API doesn't support creating relations in bulk. So we need to create them one by one.
  for (const relation of relations) {
    try {
      const data = await directus.relations.createOne(relation)
      console.log('Relation created:', data)
    } catch (error) {
      console.log(error)
    }
  }
}

async function createSampleData(sampleData) {
  try {
    const { data: itemsCreated } = await directus
      .items('items')
      .createMany(sampleData)
    console.log('Items created:', itemsCreated.length)
  } catch (error) {
    throw new Error(error)
  }
}

// Main function to run the script
async function seedDirectus() {
  console.log('Seeding Directus...')

  try {
    await createCollections(collections)
    await createFields(fields)
    await createRelations(relations)
    // await createSampleData(sampleData)
    console.log('Successfully seeded Directus starter project')
  } catch (error) {
    console.log(error)
  }
}

seedDirectus()
