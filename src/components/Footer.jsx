import moment from "moment"

const Footer = ({time}) => {
    return <p>Data date: {new Date(time).toLocaleString()}</p>
}

export default Footer;