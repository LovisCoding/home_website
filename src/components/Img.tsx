import {Box, BoxProps, } from "@mui/material";

type ImgProps = {
    alt: string;
    src: string;
    sx: object;
}

export const Img = (props: BoxProps & ImgProps) => <Box component='img' {...props} />;