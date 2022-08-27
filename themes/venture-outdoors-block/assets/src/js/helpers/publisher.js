let events = {}
let subscriberId = -1

module.exports = {
  publish (e, data) {
    if (!events[e]) {
      return false
    }

    const subsribers = events[e]
    subsribers.forEach(subsriber => {
      subsriber.callback(e, data)
    })
    return true
  },

  subscribe(e, callback) {
    if (!events[e]) {
      events[e] = []
    }

    subscriberId += 1
    const token = subscriberId.toString()
    events[e].push({
      token: token,
      callback: callback
    })
    return token;
  },

  unsubscribe(token) {
    const found = Object.keys(events).some(event => 
      events[event].some((subsriber, index) => {
        const isEqual = subsriber.token === token.toString()
        if (isEqual) {
          events[event].splice(index, 1)
        }
        return isEqual
    }))

    return found ? token : null
  }
}
