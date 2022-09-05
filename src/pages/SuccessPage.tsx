import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SuccessPage.module.css";

const SuccessPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.successPageDiv}>
      <div className={styles.successDiv}>Success</div>
      <div className={styles.congratulationsItsWorking}>
        Congratulations, it’s Working
      </div>
      <Link className={styles.welcomeScreenA} to="/">
        Welcome Screen
      </Link>
      <Button
        className={styles.button}
        sx={{ width: 288 }}
        variant="contained"
        color="info"
        onClick={onButtonClick}
      >
        BAck Home
      </Button>
      <img
        className={styles.illustration3Icon}
        alt=""
        src="../illustration-3.svg"
      />
    </div>
  );
};

export default SuccessPage;
