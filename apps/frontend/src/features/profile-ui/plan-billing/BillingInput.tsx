import { createStyles, Grid, TextInput } from '@mantine/core'
import Btn from '../Btn'

const useStyle = createStyles((theme) => ({
    mainContainer: {
        position: "relative",
        marginTop: "3%",
    },
    inputBtn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "90%",
    }
}))

function BillingInput(input: {btnVarient?: string, inputLabel: string, btnLabel: string}) {
    const { classes, theme } = useStyle()

  return (
    <Grid className={classes.mainContainer}>
        <Grid.Col span={8}>
            <TextInput
                placeholder="Your name"
                label={input.inputLabel}
                withAsterisk
            />
        </Grid.Col>
        <Grid.Col span={4}  className={classes.inputBtn}>
            <Btn 
                label={input.btnLabel}
                btnWidth="100%"
                varient={input.btnVarient ?? undefined}
            />
        </Grid.Col>
    </Grid>
  )
}

export default BillingInput