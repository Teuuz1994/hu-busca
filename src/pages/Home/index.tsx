import { FiUser } from "react-icons/fi";

import Button from "../../components/Button";

const Home = () => {
  return (
    <Button
      textContent="Buscar"
      variant="danger"
      textContentSize="medium"
      textBolder
      icon={
        <FiUser
          size={16}
          color="#fff"
          style={{
            marginRight: "10px",
          }}
        />
      }
    />
  );
};

export default Home;
