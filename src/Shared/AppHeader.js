import './AppHeader.css';

function AppHeader(props) {
    return (
        <div className="header-container">
            <header>
                <h2>
                    {props.title}
                </h2>
            </header>
        </div>
    )
}

export default AppHeader