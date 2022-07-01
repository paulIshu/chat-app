import { Button, Divider, Drawer } from "rsuite";
import { useProfile } from "../../context/profile.context";
import EtidableInput from "../EtidableInput";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();


  const onSave = async (newData )=>{
    console.log(newData);
  };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>DashBoard</Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3> Hey, {profile.name}</h3>
        <Divider/>
        <EtidableInput
        name ="Nickname"
        initialValue= {profile.name}
        onSave = {onSave}
        label ={<h6 className="mb-2">NickName</h6>}
        />
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
