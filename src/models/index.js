class Car {
  constructor(make, model, year, price, photo) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.photo = photo
  }
}
const car = new Car('Toyota', 'Camry', 2019, 30000, 'photo.url')
const car1 = new Car('Honda', 'Civic', 2020, 35000, 'photo1.url')
const car2 = new Car('Ford', 'Mustang', 2021, 45000, 'photo2.url')

const cars = [car, car1, car2]

/* class User{
  constructor()
} */
