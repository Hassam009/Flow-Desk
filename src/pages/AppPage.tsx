import CustomCard from "@/components/SharedComponent/CustomCard";
import AppData from "../Data/AppPageData.json"


export default function AppPage() {

    return(
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 mt-4 w-full">
      {AppData.map((card, index) => (
          <CustomCard
          key={index}
          name={card.name}
          status={card.status}
          description={card.description}
          />
        ))}
    </div>
    );
}