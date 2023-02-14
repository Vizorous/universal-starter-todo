import { Anchor } from '@mantine/core'

function Link(link: {label: string, underline?: boolean}) {
  return (
    <Anchor 
        underline={link.underline == true ? true : false} 
        style={{marginTop: "4%"}}
    >
      {link.label}
    </Anchor>
  )
}

export default Link