import classes from './header.module.css'
export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.logo}>Logo</div>
          <ul className={classes.nav}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes.right}>
          <button className={classes.btn}>Sign up</button>
          <div className={classes.cart}>Cart</div>
        </div>
      </div>
    </header>
  )
}
