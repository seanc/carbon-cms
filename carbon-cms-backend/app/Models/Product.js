'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'title'
      },
      strategy: 'dbIncrement'
    })
  }

  categories () {
    return this.hasMany('App/Models/Category')
  }

}

module.exports = Product
