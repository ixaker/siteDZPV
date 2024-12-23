import { DefaultPage } from '@/context/withStaticPathsAndProps';
import { Heading, Paragraph } from '@/shared';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CustomTable: React.FC<DefaultPage> = (componentProps) => {
  const tableTitle = componentProps.translationsPage.table.title;
  const thead = componentProps.translationsPage.table.thead;
  const tbody = componentProps.translationsPage.table.tbody;

  return (
    <section>
      <Heading text={tableTitle} level="h2" />

      <TableContainer component={Paper} sx={{ marginTop: '40px' }}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {thead.map((title, index) => (
                <TableCell key={index}>
                  <Paragraph style="font-bold" text={title} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tbody.map((row, index) => (
              <TableRow key={index}>
                {row.map((data, index) => (
                  <TableCell key={index}>
                    <Paragraph text={data} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default CustomTable;
