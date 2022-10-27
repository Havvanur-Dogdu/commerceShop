import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Havva Dogdu',
        email: 'havva@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Esra Yilmaz',
        email: 'esra@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users