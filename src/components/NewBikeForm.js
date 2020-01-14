import React from 'react'


const NewBike = () => {

  const addBike = () => {
  }

  return (
    <form onSubmit={addBike}>
        <h2>Lisää pyörä</h2>
        <table>
          <tbody>
            <tr>
              <td>Merkki</td>
              <td><input></input></td>
            </tr>
            <tr>
              <td>Malli</td>
              <td><input></input></td>
            </tr>
            <tr>
              <td>Vuosimalli</td>
              <td><input></input></td>
            </tr>
            <tr>
              <td>Hinta</td>
              <td><input></input></td>
            </tr>
            <tr>
              <td>
                <button type='submit'>Lähetä</button>
              </td>
            </tr>
          </tbody>        
        </table>
      </form>
  )
}

export default NewBike