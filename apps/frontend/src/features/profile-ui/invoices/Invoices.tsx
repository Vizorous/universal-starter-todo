import { createStyles, Group, Table, Title } from '@mantine/core'

const useStyle = createStyles((theme) => ({
  table: {
    marginTop: "7%",
  }
}))

function Invoices() {
  const { classes, theme } = useStyle()

  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <div>
      <Group position="apart">
        <Title weight={500} order={3}>
          Your Monthly Payments
        </Title>
        <Group>
          <Title weight={100} order={6} fs="italic">
            Next Invoice:
          </Title>
          <Title weight={500} order={5}>
            10/12/2020
          </Title>
        </Group>
      </Group>
      <Table withBorder withColumnBorders className={classes.table}>
        <thead style={{background: `${theme.colors.gray[2]}`}}>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}

export default Invoices