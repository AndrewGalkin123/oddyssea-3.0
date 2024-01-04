import './BurgerMenu.css'

const BurgerMenu:React.FC = () => {
    return (
        <div className="burger-menu">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-btn" htmlFor="menu-toggle">
            <span></span>
        </label>

        <ul className="menubox">
            <li><a className="menu-item" href="/about"></a></li>
            <li><a className="menu-item" href="/about"></a></li>
            <li><a className="menu-item" href="/aboutodessa"></a></li>
            <li><a className="menu-item" href="/about"></a></li>
            <li><a className="menu-item" href="#"></a></li>
            <li><a className="menu-item" href="/contacts"></a></li>
            <li><a className="menu-item" href="/faq"></a></li>
            <li><a className="menu-item" href="/termsofuse"></a></li>
            <li><a className="menu-item" href="/termsofuse"></a></li>
            
        </ul>
    </div>
    )
}

export {BurgerMenu}