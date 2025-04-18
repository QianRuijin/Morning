import FilterItem from './components/filterItem'
import classes from './filterBar.module.css'

const data = [
  {cate: '国籍', list: ['中国', '美国', '英国']},
  {cate: '年代', list: ['2010年', '2011年', '2012年']},
  {cate: '风格', list: ['欧式', '美式', '中式']},
  {cate: '类别', list: ['住宅', '商铺', '写字楼']},
  {cate: '户型', list: ['一室', '二室', '三室']},
  {cate: '价格', list: ['1000以下', '1000-2000', '2000以上']},
  {cate: '面积', list: ['100-200', '200-300', '300以上']},
  {cate: '楼层', list: ['1-5', '6-10', '10以上']},
]
export default function FilterBar() {
  return (
    <div className={classes.wrap}>
      {data.map((item) => (
        <FilterItem key={item.cate} data={item} />
      ))}
    </div>
  )
}
