import OverviewContent from "../../components/organisms/OverviewContent/Index";
import Sidebar from "../../components/organisms/Sidebar";

export default function Member() {
    return (
        <section className="overview overflow-auto">
            <Sidebar />
            <OverviewContent />
        </section>
    )
}
