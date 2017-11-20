import axios from 'axios'

const apiContact = 'https://heroku-node-rsac.herokuapp.com/contact/send'

function postNewContact (data) {
  return axios.post(apiContact, {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message
  }, {
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

export { postNewContact }
