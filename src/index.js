from .trainer import Trainer

const fetch = require("isomorphic-unfetch")
const querystring = require("querystring")


class TrainerDex {
  constructor(config) {
    this.token = config.token
    this.dev = config.dev

    if (this.dev) {
      this.domain = "https://trainerdex.co.uk/"

    } else {
      this.domain = config.domain
    }

    this.basePath = this.domain+"api/v1/"
  }

  request(endpoint = "", options = {}) {

    let url = this.basePath + endpoint

    let userAgent = "TrainerDex.js/0.1.0 (https://github.com/TrainerDex/TrainerDex.js) JavaScript/x.x.x unfetch/x.x.x"

    let headers {
      'User-Agent': userAgent,
      'Content-type': 'application/json'
    }
    if (this.token) {
      headers.Authorization = 'Token '+this.token
    }

    let config = {
      ...options,
      ...headers
    }

    return fetch(url, config).then(r => {
      if (r.ok) {
        return r.json()
      }
      throw new Error(r)
    })
  }

  getTrainers(options) {
    let qs = options ? "?" + querystring.stringify(options) : ""

    let url = "trainers/" + qs
    return this.request(url, {})
  }

  getTrainerById(id) {
    let url = 'trainers/'+id+'/'
    return this.request(url, {}).then(data => new Trainer(data))
  }
}
