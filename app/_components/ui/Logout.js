import { PiSignOut } from "react-icons/pi";
import Button from "./buttons/Button";

function Logout() {
  return (
    <form>
      <Button type="secondary" role="sumbit">
        <PiSignOut className="text-lg" />
      </Button>
    </form>
  );
}

export default Logout;
