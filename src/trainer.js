class Trainer {
  constructor(client, data) {
    this.client = client
    this.data = data
    this.id = data.owner
    this.oldID = data.id // This is a caviet of API v1 and how we're moving forward in API v2
    this.nickname = data.username
    this.startDate = data.start_date
    this.trainerCode = data.trainer_code
    this.isBanned = data.currently_banned
    this.lastModified = data.last_modified
    this.isVerified = data.verified
    this.isVisible = data.statistics
    this.faction = data.faction
  }

  get team() {
    return this.faction
  }

  // user() {
  //   if (this._user) {
  //     return this._user
  //   }
  //
  //   from .user import User
  //
  //   return this.client.getUserById(this.data.owner)
  // }


}
