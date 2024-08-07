const Monitor = require('../models/Monitor')

const bcrypt = require('bcrypt')

module.exports = class MonitorControllers {

    
    static async createMonitor(req, res) {
        const {name, email, password, confirmpassword, cargo} = req.body

    // validations
    if(!name) {
        return res.status(422).json({msg: "O nome é obrigatório!"})
    }
    if(!password) {
        return res.status(422).json({msg: "A senha é obrigatório!"})
    }
    if(!email) {
        return res.status(422).json({msg: "O email é obrigatório!"})
    }

    if(password !== confirmpassword){
        return res.status(422).json({ msg: "As senha não conferem" })
    } 

    // check if user exists
    const userExists = await Monitor.findOne({email: email})

    if (userExists){
        return res.status(422).json({ msg: "O email já está cadastrado" })
    }

    // create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    // create user
    const user = new Monitor({
        name,
        email,
        password: passwordHash,
        cargo
    })

    try {
        await user.save()

        res.status(201).json({msg:"Usuario criado com sucesso", user})
    }catch(error){
        console.log(error)

        res.status(500).json({msg: "TOOOO FRACOOOO"})
    }
    }
}