import React from 'react'

const LoginForm = ({ username, password, handleLogin }) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>Kirjaudu sisään</h2>
      <table>
        <tbody>
          <tr>
            <td>
              Käyttäjätunnus
            </td>
            <td>
              <input {...username.withoutReset}></input>
            </td>
          </tr>
          <tr>
            <td>
              Salasana
            </td>
            <td>
              <input {...password.withoutReset}></input>
            </td>
          </tr>
          <tr>
            <td>
              <button type='submit'>Kirjaudu sisään</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default LoginForm