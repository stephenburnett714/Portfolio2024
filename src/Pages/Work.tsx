import PortfolioDataFormat from "../Components/PortfolioDataFormat";
import PortfolioData from "../data/PortfolioData";
import Navbar from "../Components/NavbarInverse";

export default function Work() {
  return (
    <div>
      <Navbar />
      <PortfolioDataFormat PortfolioData={PortfolioData}/>
    </div>
  )
}
