import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface CardSite {
    title: string,
    description: string,
    image: string,
    link: string
}
export default function CardSite({title, description, image, link}: CardSite)
{

    return (
        <Card>
            <CardActionArea component={"a"} href={link}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                    sx={{filter: 'blur(1.5px)'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}