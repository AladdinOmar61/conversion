import moment from "moment"

const Footer = ({time}) => {
    return <p>Data date: {moment.utc(time).local().format("YYYY-MM-DD HH:mm:ss")}</p>
}

export default Footer;