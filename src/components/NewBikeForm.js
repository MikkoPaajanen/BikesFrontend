import React from 'react'
import '../newbikeform.css'

const NewBike = ({
  brand,
  model,
  year,
  price,
  addBike,
  handleImage,
  description,
  location,
  handleTypeChange
}) => {
  const biketypes = ['Maantie', 'Aika-ajo', 'Maasto täysjousitettu', 'Maasto etujousitettu',
  'Maasto jousittamaton', 'Hybridi', 'Cyclocross', 'Yksivaihteinen', 'Kaupunki' ]
  biketypes.sort()
  return (
    <form className='newbikeform' onSubmit={addBike}>
        <h2>Lisää pyörä</h2>
        <table>
          <tbody>
            <tr>
              <td className='inputinfo'>Tyyppi *</td>
              <td>
                <select onChange={handleTypeChange}>
                  <option>Tyyppi</option>
                  { biketypes.map(biketype => <option key={biketype} value={biketype}>{biketype}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td className='inputinfo'>Merkki *</td>
              <td><input {...brand.withoutReset}></input></td>
            </tr>
            <tr>
              <td className='inputinfo'>Malli *</td>
              <td><input {...model.withoutReset}></input></td>
            </tr>
            <tr>
              <td className='inputinfo'>Vuosimalli</td>
              <td><input {...year.withoutReset}></input></td>
            </tr>
            <tr>
              <td className='inputinfo'>Hinta *</td>
              <td><input {...price.withoutReset}></input></td>
            </tr>
            <tr>
              <td className='inputinfo'>Paikkakunta *</td>
              <td><input {...location.withoutReset}></input></td>
            </tr>
            <tr>
              <td className='inputinfo'>Kuva</td>
              <td><input type='file' onChange={handleImage}></input></td>
            </tr>
            <tr>
              <td className='inputinfo'>Kuvaus *</td>
              <td><textarea {...description.withoutReset}></textarea></td>
            </tr>
            <tr>
              <td>
                <button type='submit'>Lähetä</button>
              </td>
            </tr>
            <tr>
              <td colSpan='2' className='smalltext'>* Tähdellä merkityt ovat pakollisia tietoja</td>
            </tr>
          </tbody>        
        </table>
      </form>
  )
}

export default NewBike