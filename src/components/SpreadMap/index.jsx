const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {

  return (

    <section className="spread-map download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img draggable="false" src={Wwhitepaper} className="center-block" alt="" />
            </div>
          </div> 
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">Downoad Our Whitepaper</h4>
              <p className="text-white">You can check out our whitepaper. This document reflects all the technical features of our innovative product. We will update it as new results are achieved. Follow us on social media.</p>
              <a className="btn dream-btn mt-30" href="https://invisible-asset.gitbook.io/invisible-asset">
                Get Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SpreadMap