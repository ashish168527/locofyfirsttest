import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/success-page");
  }, [navigate]);

  return (
    <div className={styles.homeDiv}>
      <div className={styles.hOMEDiv}>HOME</div>
      <Button
        className={styles.button}
        sx={{ width: 288 }}
        variant="contained"
        color="primary"
        onClick={onButtonClick}
      >
        COMPLETE NOW
      </Button>
      <img
        className={styles.illustration2Icon}
        alt=""
        src="../illustration-2.svg"
      />
    </div>
  );
};

export default Home;
