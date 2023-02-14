import { createStyles, Table } from '@mantine/core'

const useStyle = createStyles((theme) => ({
    marginTop: {
        marginTop: "5%",
    }
}))

function CustomTable(table: {Heads: any, rows: any}) {
  const { classes, theme } = useStyle()

  return (
    <Table className={classes.marginTop}>
        <thead>
            <tr>
              {table.Heads}
            </tr>
        </thead>
        <tbody>{table.rows}</tbody>
    </Table>
  )
}

export default CustomTable