import React, {useState,useEffect} from "react";
import 'bulma/css/bulma.css'

import img1 from "./../../images/photo-1489659639091-8b687bc4386e.jpg"
import img2 from "./../../images/photo-1554057009-6798cb3d4a04.jpg"
import img3 from "./../../images/photo-1531853121101-cb94c8ed218d.jpg"
import img4 from "./../../images/photo-1560944527-a4a429848866.jpg"

class Carousel extends  React.Component{
    state ={
        photos:[img1,img2,img3,img4],
        active: 0
    };


    //with a arrow function we declare his own state and only use
    //with event listeners and functions that we're passing into children
    handleIndexClick = (e)=> {
        this.setState({
            active: +e.target.dataset.index
        })
    };

    setNextImage = () => {
        // setState method is used to update the state
        let index = this.state.active;
        const length = this.state.photos.length;
        if(index === length) {
            index = 0;
            this.setState(this.state.active === 0);
        }
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(this.setNextImage, 2000);
    }


    render() {
        const { photos, active} = this. state;


        return(
            <div className="">
                <div className="columns">
                    {
                        photos.map((photo, index) => {
                            return(
                            //eslint-disable-next-line
                            <figure key={`carousel-img-${index}`} className=" column image  is-128x128">
                                <img
                                    style={{height: 200}}
                                    className="img-carousel"
                                    key={photo}
                                    onClick={this.handleIndexClick}
                                    data-index={index}
                                    src={photo}

                                    alt="about-us thumbnail"
                                />
                            </figure>


                            ) })
                    }
                </div>
            </div>
        )
    }
}

export default Carousel