import './classes.css';

const Footer = ({ length }) => {
    const today = new Date();

    return (
        <footer>
            <p style={{ textAlign: 'center' }}>
                Lista składa się z {length} {length === 1 ? 'elementu' : 'elementów'}</p>
            <p className='date'>Created by Norbert in {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
