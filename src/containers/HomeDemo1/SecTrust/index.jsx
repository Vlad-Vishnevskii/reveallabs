import SectionHeading from "../../../components/SectionHeading"
import TrustItem from "./TrustItem"

const SecTrust = ({data}) => {

    return (

      <div className="trust-section section-padding-0-70">
        <SectionHeading
          title="Partners"
          text=""
          description="Below are the strategically important tools we were inspired by to build our platform, which brings together the best of tech solutions"
        />
        <div className="container">
          <div className="row">
            {data && data.map((item , key) => (
              <TrustItem
                key={key}
                img={item.img}
                CheckIcon={item.CheckIcon}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default SecTrust;