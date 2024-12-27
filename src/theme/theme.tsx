import { ReactNode } from "react";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";

type ThemeProps = {
    children: ReactNode;
};

export default function Theme({ children }: ThemeProps) {
    let theme = createTheme({
        typography: {
            fontFamily: 'system-ui',
        }
    });
    theme = responsiveFontSizes(theme);
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
