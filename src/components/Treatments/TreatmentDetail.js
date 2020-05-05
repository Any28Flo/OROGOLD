import React from "react"

const TreatmentDetail = (props) =>{
    const {title,description, icon} = props.details;
    return(
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img className="is-circular"
                             src={icon}
                             alt="treatmen-detal"
                        />

                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">

                        <div className="media-content has-text-centered">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>

                    <div className="content">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TreatmentDetail;