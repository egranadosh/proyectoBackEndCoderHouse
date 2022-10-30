class Products {
    constructor() {
      this.products = [
        {
          id: 1,
          title: "Escuadra",
          price: 250,
          thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
        },
        {
          id: 2,
          title: "Calculadora",
          price: 234.56,
          thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
        },
        {
          id: 3,
          title: "Globo Terráqueo",
          price: 345.67,
          thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
        }
      ]
  
      this.numberOfProducts = this.products.length
    }
  
    add = (product) => {
      const lastItem = this.products[this.numberOfProducts - 1] //Ultimo item del array
      const lastID = lastItem.id //ID del ultimo item
      const nextID = lastID + 1 //ID para el nuevo item
      product.id = nextID
      this.products.push(product)
      this.numberOfProducts++
    }
  
    getByID = (id) => {
      let positionFound = this.#getProductPosInArray(id)
  
      if (!positionFound) return null
  
      return this.products[positionFound]
    }
  
    delete = (id) => {
      const actualProducts = [...this.products]
      const filteredProducts = actualProducts.filter((product) => product.id !== parseInt(id))
      this.products = [...filteredProducts]
      this.numberOfProducts = this.products.length
    }
  
    getAll = () => {
      return this.products
    }
  
    update = (id, product) => {
      let positionFound = this.#getProductPosInArray(id)
      if (!positionFound) return null
      product.id = id
      this.products[positionFound] = product
      return true
    }
  
    #getProductPosInArray = (id) => {
      let pos = null
  
      for (let i = 0; i < this.numberOfProducts; i++) {
        if (this.products[i].id === parseInt(id)) {
          pos = i
          break
        }
      }
  
      return pos
    }
  }
  
  module.exports = Products;