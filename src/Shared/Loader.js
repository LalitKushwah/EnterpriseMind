 import Loader from 'react-loader-spinner';
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function CustomLoader (props) {
    const style = {
        marginTop: 10
    }
    return (
        <div style={ style }>
            <Loader type="Puff" color="#00BFFF" height="100" width="100"></Loader>
        </div>
    )
}
export default CustomLoader;