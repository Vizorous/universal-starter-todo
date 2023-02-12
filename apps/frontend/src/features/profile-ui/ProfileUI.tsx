import { Box, createStyles, Grid, NavLink, ScrollArea, Stack } from '@mantine/core';
import { useState } from 'react';
import AccountAccess from './account-access/AccountAccess';
import Invoices from './invoices/Invoices';
import Logout from './logout/Logout';
import PlanAndBilling from './plan-billing/PlanAndBilling';
import ProfileInfo from './profile-info/ProfileInfo';
import SecuritySetting from './security-settings/SecuritySetting';
import UserManagement from './user-management/UserManagement';

const useStyle = createStyles((theme) => ({
    mainContainer: {
        background: theme.white,
        // height: (window.innerHeight/4)*3,
        marginTop: "50px",
        padding: "10px",

    },
    navContainer: {
        // height: "100%",
    }
}))

const data = [
    { label: 'Profile Info', },
    { label: 'Plan & Billing' },
    { label: 'Invoices' },
    { label: 'Account Access'},
    { label: 'User Management' },
    { label: 'Security Settings' },
    { label: 'Logout' },
];

export function ProfileUI() {
  const { classes, theme } = useStyle()
  const [active, setActive] = useState(0)

  return (
    <Grid className={classes.mainContainer}>
        <Grid.Col span={3}>
            {/* <Stack justify="space-between" style={{height: ((window.innerHeight/4)*3)-40}}> */}
            <Stack justify="space-between" className={classes.navContainer}>
                {
                    data.map((item, index) => (
                        <NavLink
                          key={item.label}
                          active={index === active}
                          label={item.label}
                          onClick={() => setActive(index)}
                        //   color="orange"
                        />
                    ))
                }
            </Stack>
        </Grid.Col>
        <Grid.Col span={8}>
            <div style={{margin: "4% 0% 4% 4%"}}>
                {/* <ScrollArea> */}
                    {
                        active == 0 ? 
                            <ProfileInfo />
                        : active == 1 ?
                            <PlanAndBilling />
                        : active == 2 ?
                            <Invoices />
                        : active == 3 ?
                            <AccountAccess />
                        : active == 4 ?
                            <UserManagement />
                        : active == 5 ? 
                            <SecuritySetting />
                        : <Logout />                     
                    }
                {/* </ScrollArea> */}
            </div>
        </Grid.Col>
    </Grid>
  );
}