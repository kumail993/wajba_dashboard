import BarChart from '../../Component/BarChart/BarChart';
import Charts from '../../Component/Charts/Charts';
// import ChartandOrder from '../../Component/CharttandOrders/ChartandOrder';
import Dashboardhome from '../../Component/Dashboardhome/Dashboardhome';
import FeaturedCards from '../../Component/FeaturedCards/FeaturedCards';
import Table from '../../Component/Tables/Table';
import './Home.css';




export default function Home() {
  return (
    
    <div className='home'>
      <Dashboardhome/>
        <FeaturedCards/>
        <Table/>
        <Charts/>
        <BarChart/>
        {/* <ChartandOrder/> */}
        

      

    </div>
  )
}
