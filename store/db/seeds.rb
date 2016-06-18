# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Product.delete_all

Presentation.delete_all

# . . .
Product.create(title: 'Producto 1', description: 'Descripcion 1')
# . . .
Product.create(title: 'Producto 2', description: 'Descripcion 2')
# . . .
Product.create(title: 'Producto 3', description: 'Descripcion 3')


p = Product.first

Presentation.create(title: 'Presentation 1')

b = Presentation.first

b.product = p

b.save



# . . .
# Product.create(title: 'Producto 4', description: 'Descripcion 4')
# # . . .
# Product.create(title: 'Producto 5', description: 'Descripcion 5')
# # . . .
# Product.create(title: 'Producto 6', description: 'Descripcion 6')
# # . . .
# Product.create(title: 'Producto 7', description: 'Descripcion 7')
# # . . .
# Product.create(title: 'Producto 8', description: 'Descripcion 8')
# # . . .
# Product.create(title: 'Producto 9', description: 'Descripcion 9')
# # . . .
# Product.create(title: 'Producto 10', description: 'Descripcion 10')
# # . . .
# Product.create(title: 'Producto 11', description: 'Descripcion 11')
#
# Product.create(title: 'Producto 12', description: 'Descripcion 12')
# # . . .
# Product.create(title: 'Producto 13', description: 'Descripcion 13')
# # . . .
# Product.create(title: 'Producto 14', description: 'Descripcion 14')
# # . . .
# Product.create(title: 'Producto 15', description: 'Descripcion 15')
# # . . .
# Product.create(title: 'Producto 16', description: 'Descripcion 16')
# # . . .
# Product.create(title: 'Producto 17', description: 'Descripcion 17')
# # . . .
# Product.create(title: 'Producto 18', description: 'Descripcion 18')
# # . . .
# Product.create(title: 'Producto 19', description: 'Descripcion 19')
# # . . .
# Product.create(title: 'Producto 20', description: 'Descripcion 20')
# # . . .
# Product.create(title: 'Producto 21', description: 'Descripcion 21')
# # . . .
# Product.create(title: 'Producto 22', description: 'Descripcion 22')
