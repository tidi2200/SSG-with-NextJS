import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface ICardItem {
    data: NewsPost
}

type NewsPost = {
    title: string;
    body: string;
    id: number
}

export default function CardItem (props: ICardItem): JSX.Element {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150/92c952"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.data.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"><Link href={`/news/${props.data.id}`}>Learn More</Link></Button>
            </CardActions>
        </Card>
    )
}