import React, { useState } from 'react'
import { createStyles, Navbar, Tooltip, ActionIcon, Stack, Transition } from '@mantine/core'

import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import {
	TablerCalendarStats,
	TablerChevronLeft,
	TablerDeviceDesktopAnalytics,
	TablerFingerprint,
	TablerGauge,
	TablerHome,
	TablerSettings,
	TablerUser
} from '@seamlessc/tabler-icons-react'

const useStyles = createStyles((theme, { expanded }: { expanded: boolean }) => ({
	icon: {
		paddingBottom: '4px',
		verticalAlign: 'middle',
		marginRight: theme.spacing.xs
	},
	scaling: {
		padding: `0 ${expanded ? theme.spacing.md : theme.spacing.xs}px`,
		marginRight: theme.spacing.xs,
		transition: 'all 0.2s ease-in-out'
	},
	expandBtn: {
		transition: 'all 0.2s ease-in-out',
		transform: expanded ? 'scaleX(1)' : 'scaleX(-1)'
	},
	link: {
		boxSizing: 'border-box',
		display: 'block',
		overflowX: 'clip',
		textDecoration: 'none',
		borderTopRightRadius: theme.radius.md,
		borderBottomRightRadius: theme.radius.md,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		height: 44,
		lineHeight: '44px',
		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black
		}
	},
	text: {
		scaleX: expanded ? 1 : 0,
		transition: 'opacity 0.2s ease-in-out, scaleX 0.2s ease-in-out',
		transformOrigin: 'left',
		opacity: expanded ? 1 : 0,
		[`@media (max-width: ${theme.breakpoints.xs}px)`]: {
			opacity: 1,
			scaleX: 1
		}
	},
	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.colors[theme.primaryColor][theme.primaryShade as number],
			color: theme.white
		}
	}
}))

const mainLinks = [
	{ icon: TablerHome, label: 'Home' },
	{ icon: TablerGauge, label: 'Dashboards' },
	{ icon: TablerDeviceDesktopAnalytics, label: 'Analytics' },
	{ icon: TablerCalendarStats, label: 'Releases' },
	{ icon: TablerUser, label: 'Account' },
	{ icon: TablerFingerprint, label: 'Security' },
	{ icon: TablerSettings, label: 'Settings' }
]

interface NavbarProps {
	respOpen: boolean
}

const ResponsiveNavbar: React.FC<NavbarProps> = (props) => {
	const [activeLink, setActiveLink] = useState('Home')
	const [expanded, expandHandlers] = useDisclosure(false)
	const { classes, cx, theme } = useStyles({ expanded })
	// larger than XS
	const ltXS = useMediaQuery(`(min-width: ${theme.breakpoints.xs}px)`)
	return (
		<Transition mounted={ltXS || props.respOpen} transition={'pop-top-left'} duration={200} exitDuration={200}>
			{(style) => (
				<Navbar
					width={{ xs: expanded ? 200 : 58 }}
					hiddenBreakpoint="xs"
					hidden={false}
					style={{ ...style, transition: 'all 0.2s ease-in-out' }}
				>
					<Stack ml={0} mt={theme.spacing.xs}>
						<div>
							{mainLinks.map(({ label: link, icon: Icon }) => (
								<Tooltip
									disabled={!(ltXS && !expanded)}
									label={link}
									position="right"
									withArrow
									transitionDuration={200}
									key={`tooltip-${link}`}
								>
									<a
										className={cx(classes.link, classes.scaling, { [classes.linkActive]: activeLink === link })}
										href="/"
										onClick={(event) => {
											event.preventDefault()
											setActiveLink(link)
										}}
										key={link}
									>
										<Icon className={cx(classes.icon)} key={`icon-${link}`}></Icon>
										<span className={cx(classes.text)} key={`text-${link}`}>
											{link}
										</span>
									</a>
								</Tooltip>
							))}
						</div>
						{ltXS
							? (
								<div className={cx(classes.scaling)} onClick={expandHandlers.toggle}>
									<ActionIcon variant="subtle" className={cx(classes.expandBtn)}>
										<TablerChevronLeft
											size={56}
											strokeWidth={2}
											color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7]}
										/>
									</ActionIcon>
								</div>
							)
							: null}
					</Stack>
				</Navbar>
			)}
		</Transition>
	)
}

export default ResponsiveNavbar
