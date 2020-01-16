import React from 'react'

const RegisterForm = ({ username, password, firstname, lastname, handleRegister }) => {
  return (
    <form onSubmit={handleRegister}>
      <h2>Rekisteröidy</h2>
      <table>
        <tbody>
          <tr>
            <td>
              Etunimi
            </td>
            <td>
              <input {...firstname.withoutReset}></input>
            </td>
          </tr>
          <tr>
            <td>
              Sukunimi
            </td>
            <td>
              <input {...lastname.withoutReset}></input>
            </td>
          </tr>
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
              <button type='submit'>Rekisteröidy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default RegisterForm