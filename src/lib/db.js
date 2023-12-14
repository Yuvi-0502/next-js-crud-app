const {name, password} = process.env


export const connectionLink = `mongodb+srv://${name}:${password}@cluster0.sgay1eg.mongodb.net/productDB?retryWrites=true&w=majority`