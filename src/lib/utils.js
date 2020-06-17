export default {
  sleep(timeout) {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  },
}
