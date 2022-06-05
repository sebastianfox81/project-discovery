const Airtable = require('airtable-node')
require('dotenv').config()

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app8V6SQhKmgTM8d0')
  .table('guitars')

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: ` No product with id: ${id}`,
        }
      }
      return {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error',
      }
    }
  }
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const { name, brand, images, price, featured, category } = product.fields
      const url = images[0].url
      return { id, name, brand, url, price, featured, category }
    })
    return {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 200,
      body: JSON.stringify(products)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error'
    }
  }
}