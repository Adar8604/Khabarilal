import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {
        let { title, description, imageurl, newsurl } = this.props;
        return (
            <div>
                {/*                 <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl ? imageurl : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com"}...</h5>
                        <p className="card-text">{description ? description : "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com"}...</p>
                        <a target="_blank" rel="noopener noreferrer" href={newsurl} className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div> */}



                <div class="row featurette d-flex justify-content-centre align-items-centre my-4 shadow p-3 mb-5 bg-body rounded 2">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">{title ? title : "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com"}...
                        </h2>
                        <p className="card-text">{description ? description : "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com"}...</p>
                        <a target="_blank" rel="noopener noreferrer" href={newsurl} className="btn btn-primary btn-sm">Read More</a>
                    </div>
                    <div class="col-md-5">
                        <img src={imageurl ? imageurl : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} className="card-img-top" alt="..." />

                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem
