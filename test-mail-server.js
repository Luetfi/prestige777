import http from 'http'
import nodemailer from 'nodemailer'

// ============================================
// IONOS SMTP-Zugangsdaten hier eintragen:
const SMTP_USER = 'info@prestige777.de'
const SMTP_PASS = 'Prestige777@!'
// ============================================

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.de',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
})

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  if (req.method !== 'POST' || req.url !== '/api/contact.php') {
    res.writeHead(404)
    res.end(JSON.stringify({ success: false, message: 'Not found' }))
    return
  }

  let body = ''
  req.on('data', chunk => { body += chunk })
  req.on('end', async () => {
    try {
      const data = JSON.parse(body)
      const { name, email, subject, message } = data

      if (!name || !email || !subject || !message) {
        res.writeHead(400)
        res.end(JSON.stringify({ success: false, message: 'Alle Felder sind Pflicht.' }))
        return
      }

      console.log('\n--- Neue Kontaktanfrage ---')
      console.log(`Name:    ${name}`)
      console.log(`E-Mail:  ${email}`)
      console.log(`Betreff: ${subject}`)
      console.log(`Nachricht: ${message}`)
      console.log('---------------------------')
      console.log('Sende E-Mail...')

      await transporter.sendMail({
        from: `"Prestige 777 Website" <${SMTP_USER}>`,
        replyTo: email,
        to: 'info@prestige777.de',
        subject: `Kontaktanfrage: ${subject}`,
        text: `Neue Kontaktanfrage über die Website:\n\nName: ${name}\nE-Mail: ${email}\nBetreff: ${subject}\n\nNachricht:\n${message}`
      })

      console.log('E-Mail erfolgreich gesendet!')
      res.writeHead(200)
      res.end(JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet.' }))
    } catch (err) {
      console.error('Fehler:', err.message)
      res.writeHead(500)
      res.end(JSON.stringify({ success: false, message: 'E-Mail konnte nicht gesendet werden.' }))
    }
  })
})

server.listen(3001, () => {
  console.log('Test-Mail-Server läuft auf http://localhost:3001')
  console.log(`SMTP: ${SMTP_USER}`)
  console.log('Warte auf Kontaktanfragen...\n')
})
