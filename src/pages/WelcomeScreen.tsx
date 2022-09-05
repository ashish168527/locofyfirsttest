import { FunctionComponent, useCallback } from "react";
import { Button, Icon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./WelcomeScreen.module.css";

const WelcomeScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainedTextAndIcoClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.welcomeScreenDiv}>
      <div className={styles.startLearlingEasily}>Start learling easily!</div>
      <div
        className={styles.enjoyOurMethodOfLearningF}
      >{`Enjoy our method of learning foreign languages without an effort. `}</div>
      <Link className={styles.skipIntroA} to="/home">
        Skip intro
      </Link>
      <img
        className={styles.illustration1Icon}
        alt=""
        src="../illustration-1.svg"
      />
      <Button
        className={styles.buttonContainedTextAndIco}
        variant="contained"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
        onClick={onButtonContainedTextAndIcoClick}
      >
        Button
      </Button>
    </div>
  );
};

export default WelcomeScreen;
