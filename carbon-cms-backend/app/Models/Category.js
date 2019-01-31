'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'title'
      },
      strategy: 'dbIncrement'
    })
  }

  products () {
    return this.belongsToMany('App/Models/Product')
      .withTimestamps()
  }

}

module.exports = Category
