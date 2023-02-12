import { createStyles, Title } from '@mantine/core'
import BillingInput from './BillingInput'

const useStyle = createStyles((theme) => ({
    bilingContainer: {
        marginTop: "10%",
    }
}))

function BillingInfo() {
  const { classes, theme } = useStyle()

  return (
    <div className={classes.bilingContainer}>
        <Title weight={400} order={3}>
            Billing Information
        </Title>
        <BillingInput 
            btnVarient="outline" 
            btnLabel="Save Changes" 
            inputLabel="Billing Notifications sent to"
        />
        <BillingInput 
            btnLabel="Edit Information"
            inputLabel="Credit card information"
        />
    </div>
  )
}

export default BillingInfo