import ColorPicker from 'react-best-gradient-color-picker'
import React, { useState } from 'react'

function ColorPickerController({hideController=false, selectedColor}) {
    const [color, setColor] = useState('rgba(255,255,255,1)');

  return (
    <div>
        <ColorPicker value={color} onChange={(e) => {setColor(e);selectedColor(e)}} 
            hideControls={hideController}
            hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType
        />
    </div>
  )
}

export default ColorPickerController