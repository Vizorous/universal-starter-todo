import { ActionIcon, Button, createStyles, FileButton, Grid, Group, Stack, Title } from '@mantine/core'
import UserImg from '../../../assets/default-user.png'
import CameraIcon from '../../../assets/camera.png'
import ProfileDataInput from './ProfileDataInput'
import { useEffect, useState } from 'react'
import Btn from '../Btn'

const useStyle = createStyles((theme) => ({
  imgDiv: {
    width: "70%",
    position: "relative",
  },
  avatar: {
      objectFit: "cover",
      borderRadius: "50%",
      width: "100%",
  }, 
  overlay: {
    position: "absolute",
    bottom: "10%",
    right: 0,
  },
  basicInfoContainer: {
    marginBottom: "10%",
  },
  btnsContainer: {
    marginTop: "10%",
  }
}))

function ProfileInfo() {
  const { classes, theme } = useStyle()
  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()
  const [ lname, setLName ] = useState()
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(file)
  }, [file])
  
  return (
    <form>
      <Grid>
        <Grid.Col span={4}>
          <div className={classes.imgDiv}>
            <img src={UserImg} id="output" className={classes.avatar} />
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <ActionIcon color="orange" radius="xl" variant="light" className={classes.overlay}>
                  <img {...props} src={CameraIcon} width={15} height={15} />
                </ActionIcon>
              )}
            </FileButton>
          </div>
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack justify="space-between">
            <div className={classes.basicInfoContainer}>
              <Title order={2}>About You</Title>
              <ProfileDataInput label='Full Name' placeholder='Enter full name' setData={setName}/>
              <ProfileDataInput label='Last Name' placeholder='Enter last name' setData={setLName}/>
              <ProfileDataInput label='Email Address' placeholder='Enter email address' setData={setEmail}/>
            </div>
            <ProfileDataInput label='Administrator Email' placeholder='Enter administrator email' setData={setLName}/>
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="apart" className={classes.btnsContainer}>
            <Btn 
              label='Cancel'
              varient="subtle" 
              textColor={theme.colors.orange[7]}          
            />
            <Btn 
              label='Save Changes'
              bgColor={theme.colors.orange[7]} 
              textColor={theme.white}  
              disabled={true}        
            />
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  )
}

export default ProfileInfo