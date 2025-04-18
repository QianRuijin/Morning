import { useState } from 'react'
import { Divider } from 'antd';
import classes from './filterItem.module.css'

interface FilterBarProps {
  data: {
    cate: string;
    list: string[];
  }
}

export default function FilterBar({ data }: FilterBarProps) {
  const [value, setValue] = useState('')

  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.title}>{data.cate}</div>
        <div className={classes.options}>
          <div className={`${classes.option} ${value === '' ? classes.active : ''}`}
            onClick={() => setValue('')}>不限</div>
          {data.list.map((item) => (
            <div key={item} className={`${classes.option} ${value === item ? classes.active : ''}`}
              onClick={() => setValue(item)}>{item}</div>))}
        </div>
      </div>
      <Divider style={{ width: '100%', borderColor: '#eee', margin: '4px 0' }} />
    </div>
  )
}