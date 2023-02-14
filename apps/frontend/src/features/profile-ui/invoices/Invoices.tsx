import { Anchor, createStyles, Group, Table, Title } from '@mantine/core'
import DateIcon from '../../../assets/date-icon.png'
import DocIcon from '../../../assets/doc-icon.png'
import DollarIcon from '../../../assets/dollar-icon.png'
import DownloadIcon from '../../../assets/download-icon.png'
import MenuIcon from '../../../assets/menu-icon.png'
import SelectIcon from '../../../assets/select-icon.png'

const useStyle = createStyles((theme) => ({
  table: {
    marginTop: "7%",
  },
  tableRow: {
    textAlign: "center",
  },
}))

function Invoices() {
  const { classes, theme } = useStyle()

  const elements = [
    { iNo: 6, date: "12/12/2022", payment: 40, status: 'Pending' },
    { iNo: 7, date: "12/12/2022", payment: 300, status: 'Paid' },
    { iNo: 39, date: "12/12/2022", payment: 40.33, status: 'Paid' },
    { iNo: 56, date: "12/12/2022", payment: 1000, status: 'Paid' },
    { iNo: 58, date: "12/12/2022", payment: 10000, status: 'Pending' },
  ];

  const ths = (
    <tr>
      <th>
        <Group position="center" spacing="sm">
          <img src={MenuIcon} width={15} />
          <div>Invoice Number</div>
        </Group>
      </th>
      <th>
        <Group position="center" spacing="sm">
          <img src={DateIcon} width={20} />
          <div>Date</div>
        </Group>
      </th>
      <th>
        <Group position="center" spacing="sm">
          <img src={DollarIcon} width={20} />
          <div>Payment</div>
        </Group>
      </th>
      <th>
        <Group position="center" spacing="sm">
          <img src={SelectIcon} width={20} />
          <div>Status</div>
        </Group>
      </th>
      <th>
        <Group position="center" spacing="sm">
          <img src={DocIcon} width={20} />
          <div>Incoice</div>
        </Group>
      </th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.iNo} className={classes.tableRow}>
      <td>{element.iNo}</td>
      <td>{element.date}</td>
      <td>{element.payment}</td>
      <td>{element.status == "Pending" ? "Pending" : "Paid"}</td>
      <td>
        <Group position="center" spacing="md">
          <Anchor underline>View</Anchor>
          <img src={DownloadIcon} width={10} />
        </Group>
      </td>
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