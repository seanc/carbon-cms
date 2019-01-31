'use strict'

class SessionController {

  async create ({ request, response, auth }) {
    const { username, password } = request.only(['username', 'password'])
    const token = auth.withRefreshToken().attempt(username, password)

    response.ok({
      message: 'Signed in',
      data: {
        token: token.token,
        refreshToken: token.refreshToken
      }
    })
  }

  async refresh ({  })

  // async logout ({  })

}

module.exports = SessionController
