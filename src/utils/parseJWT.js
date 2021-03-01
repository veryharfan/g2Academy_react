/**
 * Parse JSON Web Token into object
 * @param {string} token
 */

export const parseJWT = token => JSON.parse(atob(token.split('.')[1]))
