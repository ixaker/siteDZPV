import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Typography } from '@mui/material';
import CustomButton from '../../button/CustomButton';
import { handleFileRemove } from '../utils/fileHandlers';
import DeleteIcon from '@mui/icons-material/Delete';

interface ListFilesProps {
  index: number;
  fileName: string;
  fileSize: number;
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

const ListFiles: React.FC<ListFilesProps> = ({ index, fileName, fileSize, setFileList }) => {
  function bytesToMegabytes(bytes: number) {
    if (typeof bytes !== 'number' || bytes < 0) {
      throw new Error('Input must be a non-negative number');
    }
    const megabytes = Math.round((bytes / (1024 * 1024)) * 100) / 100;
    return parseFloat(megabytes.toPrecision(3)).toFixed(2);
  }

  return (
    <li key={index} className="flex justify-between mt-1  items-center">
      <div className="flex items-center gap-2 w-full justify-between">
        <InsertDriveFileIcon />
        <div className="flex justify-between w-full">
          <Typography className="text-nowrap overflow-hidden w-1/2 text-ellipsis " variant="body2">
            {fileName}
          </Typography>
          <Typography variant="body2">{bytesToMegabytes(fileSize)} Mb</Typography>
        </div>
        <CustomButton
          className="p-1 text-sm hover:border-red-500 hover:text-red-500 transition-all duration-300 ease-in-out"
          onClick={() => handleFileRemove(index, setFileList)}
        >
          <DeleteIcon />
        </CustomButton>
      </div>
    </li>
  );
};

export default ListFiles;
