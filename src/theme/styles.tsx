
import { GlobalStyles } from "@mui/material";

export default function StylesMUI() {
    const styles = {
        "body": {
            margin: 0,
            height: '100vh',
            width: '100vw',
        }
    };

    return (
        <GlobalStyles styles={styles} />

    );
}