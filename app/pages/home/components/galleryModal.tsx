
import { Divider } from 'antd'; import type { GalleryData } from '../../../types/gallery';
import classes from './galleryModal.module.css'

function galleryModal({ data }: { data: GalleryData }) {
  return (
    <div className={classes.wrap}>
      <img className={classes.img} src={data.avatar.url} />
      <div className={classes.right}>
        <p>艺术家信息</p>
        <Divider style={{ width: '100%', borderColor: '#eee', margin: '4px 0' }} />
        <p>{data.name}</p>
        <p>{data.nationality}</p>
        <p>{data.birth}</p>
        {data.works && <p>作品：{data.works}</p>}
        {data.cases && <p>案例：{data.cases}</p>}
        {typeof data.links === 'string' ? (<a href={data.links} target="_blank" title='ttt' rel="noreferrer noopener" >参考链接</a>)
          : (data.links.map((link, index) => (
            <p key={link}><a href={link} target="_blank" rel="noreferrer noopener" >参考链接 {index + 1}</a></p>
          )))}
      </div>
    </div>
  )
}

export default galleryModal