import shortid from 'shortid'
export const services = [
  {
    id: shortid.generate(),
    name: 'Замена стекла',
    price: 21000,
  },
  {
    id: shortid.generate(),
    name: 'Замена дисплея',
    price: 25000,
  },
  {
    id: shortid.generate(),
    name: 'Замена акуумулятора',
    price: 5000,
  },
]
