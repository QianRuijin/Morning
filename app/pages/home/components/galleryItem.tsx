import classes from './galleryItem.module.css'

// 定义 Props 接口
interface Props {
  data: {
    id: number;
    name: string;
    avatar: { url: string }
  }; // 明确 data 的结构
  width: number;
  index: number;
  positions: Record<number, React.CSSProperties>; // positions 是一个对象，值为 CSS 属性
}

export default function GalleryItem({ data, width, index, positions }: Props) {
  return (
    <div className={classes.container}
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
}
