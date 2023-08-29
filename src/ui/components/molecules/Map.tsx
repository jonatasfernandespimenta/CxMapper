import { FaCheck, FaClock } from 'react-icons/fa';
import Box from '../atoms/Box';
import Tag from '../atoms/Tag';
import { ApprovalStatusEnum } from '@/@types/ApprovalStatusEnum';
import { useMapData } from '@/contexts/MapContext';

interface IMap {
  name: string;
  tag: string;
  approvalStatus: ApprovalStatusEnum;
  createdAt: string
  createdBy: string
  approvedAt: string
  approvedBy: string
}

export default function Map({
  name, tag, approvalStatus, createdBy, createdAt, approvedBy, approvedAt,
}: IMap) {
  const { setMapInfo } = useMapData();

  return (
    <Box onClick={() => setMapInfo({
      mapName: name, businessLine: tag, approvedAt, approvedBy, createdBy, createdAt,
    })}
    >
      <div className="absolute ml-44 -mt-2">
        {
          approvalStatus === ApprovalStatusEnum.APPROVED
            ? <FaCheck className="text-green-400" />
            : <FaClock className="text-yellow-300" />
        }
      </div>

      <h1 className="mb-2">{name}</h1>
      <Tag text={tag} />
    </Box>
  );
}
