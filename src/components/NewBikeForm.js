import React from 'react'


const NewBike = ({
  brand,
  model,
  year,
  price,
  addBike,
  handleImage
}) => {

  return (
    <form onSubmit={addBike}>
        <h2>Lisää pyörä</h2>
        <table>
          <tbody>
            <tr>
              <td>Merkki</td>
              <td><input {...brand.withoutReset}></input></td>
            </tr>
            <tr>
              <td>Malli</td>
              <td><input {...model.withoutReset}></input></td>
            </tr>
            <tr>
              <td>Vuosimalli</td>
              <td><input {...year.withoutReset}></input></td>
            </tr>
            <tr>
              <td>Hinta</td>
              <td><input {...price.withoutReset}></input></td>
            </tr>
            <tr>
              <td>Kuva</td>
              <td><input type='file' onChange={handleImage}></input></td>
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