require('dotenv').config()

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql2/promise')

router.use(bodyParser.json())

const pool = mysql.createPool({
    host: process.env.MYSQL_SERVER_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

// For testing admin route
router.get('/admin', (req, res) => {
    res.send({ message: 'admin route!' })
})

// Admin login route
router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body
    console.log(req.body)

    if (!username || !password) {
        console.log(`👤 AUTH: no username || password noob`)
        return res.status(400).json({ message: 'Username and password are required' })
    }

    try {
        const conn = await pool.getConnection();
        const [rows, fields] = await conn.execute('SELECT * FROM users WHERE userName = ? AND role = "admin"', [username])
        conn.release();

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password or user is not admin' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ username: user.ad_username }, process.env.JWT_SECRET_KEY);
            console.warn(`👤 AUTH: [${user.userName}] has logged in (${user.role})`)
            return res.json({ token });
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred' });
    }
});

// Create an admin account
router.post('/admin/create', async (req, res) => {
    const { username, password, email } = req.body

    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'Arguments not complete' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const conn = await pool.getConnection();
        const [result] = await conn.execute('INSERT INTO `users` (userName, password, email, role) VALUES (?, ?, ?, "admin")', [username, hashedPassword, email])
        conn.release();
        const adminId = result.insertId;
        console.warn(`👤 AUTH: User account [${username}] has been created (admin)`)
        return res.json({ success: true, adminId })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false })
    }
});

// List all users that has user role
router.get('/admin/users', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute('SELECT role, userId, userName, email FROM users')
        conn.release();
        return res.json({ success: true, users: rows })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false })
    }
});

// Updates user information
router.put('/admin/users/:userId', async (req, res) => {
    const { userId } = req.params
    const { username, fullname, email } = req.body

    try {
        const conn = await pool.getConnection();
        const query = await conn.execute(`UPDATE users SET userName = ? fullName = ?, email = ? WHERE userId = ?`)
    
        const [result] = await conn.query(query, [username, fullname, email, userId])
        conn.release()
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        console.warn(`👤 AUTH: User account [${username}] has been updated`)
        return res.json({ success: true })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router
