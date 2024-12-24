import { DefaultPage } from '@/context/withStaticPathsAndProps';
import { darkTheme, lightTheme } from '@/theme';
import { useTheme } from '@mui/material';

const CustomTable: React.FC<DefaultPage> = ({ translationsPage }) => {
  const theme = useTheme();
  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;

  const thead = translationsPage.table.thead;
  const tbody = translationsPage.table.tbody;

  return (
    <section>
      <table style={{ borderCollapse: `collapse` }} className="w-full text-center text-[9px] md:text-[15px]">
        <thead>
          {thead.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <th
                  key={index}
                  style={{ border: `1px solid ${secondaryColor}` }}
                  colSpan={cell.colSpan}
                  rowSpan={cell.rowSpan}
                  className="p-1"
                >
                  {cell.title}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {tbody.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index} style={{ border: `1px solid ${secondaryColor}` }} className="p-1 md:p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CustomTable;
