import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featuresData } from '../constants';

// === FOOTER ===

const FeatureDivComponent = ({feature}) => {
    
    const {icon, title, description} = feature;

    return (
            <>
                <div className="feature" style={{
                    margin : "10px",
                    display : "flex",
                    gap : "10px"
                }}>
                    <div className="featureIcon" style={{
                        fontSize : "25px",
                        textAlign : "center",
                        display : "flex",
                        alignItems : "center",
                        padding : "10px",
                        color : "#16a085"
                    }}> <FontAwesomeIcon icon={icon}/> </div>

                    <div className="featureContent" style={{
                        padding : "0px 20px"
                    }}>
                        <p className="featureTitle" style={{
                        fontSize : "22px",
                        fontWeight : "700",
                        padding : "5px 0px"
                    }}> {title} </p>
                        <p className="featureTDescription"> {description} </p>
                    </div>
                </div>
            </>
        )
    }

const Footer = () => {
    return (
        <footer style={{
            width : "100%",
            height : "auto",
            display : "flex",
            justifyContent : "space-evenly",
            padding : "0px 50px",
            margin : "auto"
        }}>

            {
                /* Using the map to automate the things */
                featuresData.map((feature) => {
                    return <FeatureDivComponent feature={feature}/>
                })
            }
          
        </footer>
    )
}

export default Footer;