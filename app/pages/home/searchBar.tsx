import {useState, useEffect} from 'react'
import { Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import classes from './searchBar.module.css'
export default function SearchBar() {
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    console.log(search) 
  }

  useEffect(() => {
    
  },[])

  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.title}>最新最热精选案例</div>
        <Divider type="vertical" style={{ height: '20px', borderColor: 'black' }} />
        <input type='text' className={classes.input} placeholder='请输入项目案例关键词' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className={classes.btn} onClick={handleSearch}>
          <SearchOutlined style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  )
}
