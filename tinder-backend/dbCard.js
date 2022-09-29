import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name:'string',
    imgurl:'string',
})

export default mongoose.model('cards', cardSchema)