import { Anchor, Checkbox, createStyles, Flex, Text, Title } from '@mantine/core'
import React, { useState } from 'react'
import Btn from '../Btn'
import Link from '../Links'
import ProfileDataInput from '../profile-info/ProfileDataInput'

const useStyle = createStyles((theme) => ({
  marginTop: {
    marginTop: "6%",
  },
  inputBox: {
    margin: "5% 10% 5% 20%",
  }
}))

function AccountAccess() {
  const { classes, theme } = useStyle()
  const [cPw, setCPw] = useState("")
  const [nPw, setNPw] = useState("")
  const [rePw, setRePw] = useState("")
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <Title weight={400}>
        Change Password
      </Title>
      <Text color={theme.colors.gray[6]} className={classes.marginTop}>
        Create a new password that is at least 8 characters long.
      </Text>
      <div className={classes.inputBox}>
        <ProfileDataInput
          label="Type your current password"
          placeholder="Current Password"
          setData={setCPw}
          withAsterisk={true}
        />
        <ProfileDataInput
          label="Type your current password"
          placeholder="New password"
          setData={setNPw}
          withAsterisk={true}
        />
        <ProfileDataInput
          label="Retype your new password"
          placeholder="Reype new password"
          setData={setRePw}
          withAsterisk={true}
        />
        <Flex
            align="center"
            wrap="wrap"
            direction="column"
            gap={{ base: 'sm', sm: 'lg' }}
            justify={{ sm: 'center' }}
          >
            <Checkbox 
              label="Require all devices to sign in with new password" 
              className={classes.marginTop} 
              checked={checked} 
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            <Btn 
              label="Save Password"
              btnWidth="50%"
              marginTop="4%"
            />
            <Link 
              label="Forgot Password"
              underline={true}
            />
          </Flex>
      </div>
    </div>
  )
}

export default AccountAccess