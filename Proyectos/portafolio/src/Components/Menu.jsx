import { NavLink } from 'react-router-dom';

const Menu = () => {
return (
    <nav className='navegacion'>
        <NavLink className={({isActive}) => (isActive ? "activeli-link" : null)} to={'/'}> Home </NavLink>
        <NavLink className={({isActive}) => (isActive ? "activeli-link" : null)} to={'/AboutMe'}> AboutMe </NavLink>
        <NavLink className={({isActive}) => (isActive ? "activeli-link" : null)} to={'/Experience'}> Experience </NavLink>
        <NavLink className={({isActive}) => (isActive ? "activeli-link" : null)} to={'/Proyects'}> Proyects </NavLink>
    </nav>
)
}

export default Menu
