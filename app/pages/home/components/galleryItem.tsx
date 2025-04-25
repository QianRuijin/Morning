import { memo } from 'react'
import classes from './galleryItem.module.css'
import type { GalleryData, Position } from '../../../types/gallery';

// 定义 Props 接口
interface Props {
  data: GalleryData;
  width: number;
  index: number;
  positions: Position[];
  onClick: (data: GalleryData) => void;
}

const GalleryItem = memo(function GalleryItem({ data, width, index, positions, onClick }: Props) {
  return (
    <div className={classes.container} onClick={() => onClick(data)}
      style={{
        width: `${width}px`,
        position: "absolute",
        ...positions[index],
      }}>
      <img src={data.avatar.url} />
      <div className={classes.overlay}>
        {data.name}
      </div>
    </div>
  )
})

export default GalleryItem
