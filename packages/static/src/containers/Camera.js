/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Camera from 'thicket-camera'
//

export default () => (
  <div>
    <h1>Smile!</h1>
    <Camera onSave={() => alert('great photo!')} />
  </div>
)
