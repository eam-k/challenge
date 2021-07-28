/**
 * Check if response is OK otherwise it throw an error.
 * @param {object} res
 * @param {string} msg
 */
export default function checkError(res, msg) {
  if (!res.ok) {
    throw Error(`${msg} ${res.status}`)
  }
}
