import { Button } from '@mantine/core'
import React from 'react'

function Btn(btn: {
    label: string, 
    bgColor?: string, 
    textColor?: string, 
    varient?: any, 
    disabled?: boolean,
    btnWidth?: string,
    marginTop?: string,
  }) {
  return (
    <Button 
      variant={btn.varient != null ? btn.varient : "filled"} 
      disabled={btn.disabled ? true : false}
      style= {{width: btn.btnWidth, marginTop: btn.marginTop}}
    >
        {btn.label}
    </Button>
  )
}

export default Btn