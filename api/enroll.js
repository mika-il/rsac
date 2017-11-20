import axios from 'axios'

const PROJECTS = 383649073217945
const WORKSPACE = 333939102913217
const ASANATOKEN = '0/60f9ed364f732f594c81dc3aec39b1aa'

function postNewAsanaTask (notes, name) {
  let config = {
    headers: {
      'Authorization': `Bearer ${ASANATOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  return axios.post(`https://app.asana.com/api/1.0/tasks?projects=${PROJECTS}&workspace=${WORKSPACE}&name=${name}&notes=${notes}`, null, config)
}

export { postNewAsanaTask }
