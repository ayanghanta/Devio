import DashBorardNav from "../_components/dashboard/dashboardNav";

function layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto">
      <DashBorardNav />
      {children}
    </div>
  );
}

export default layout;
