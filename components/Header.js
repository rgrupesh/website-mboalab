import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Welcome </span> to <span>Mboalab</span> Project
      </h1>
      <p className={headerStyles.description}>
      MboaLab is an open and collaborative space located in Yaoundé, Cameroon. The aim of MboaLab is to catalyse sustainable local development and improve people’s living conditions through open science.
      </p>
    </div>
  )
}

export default Header
