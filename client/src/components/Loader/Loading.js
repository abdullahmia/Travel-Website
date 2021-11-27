import Loader from 'react-loader-spinner';
import './loader.css'

const Loading = () => {
    return (
        <div className='loader_box'>
            <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={13000} //3 secs
            />
        </div>
    )
}

export default Loading
