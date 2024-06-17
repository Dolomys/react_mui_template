import { Grid } from '@mui/material';

type ItemSize = IntRange<1, 13>;

export interface GridItems {
  value: React.ReactNode;
  size?: ItemSize;
}

interface GridContainerProps {
  items: GridItems[];
  itemPerRow: number;
}

const GridContainer = (props: GridContainerProps) => {
  const { items, itemPerRow } = props;
  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item p={'10px'} key={index} xs={12} md={12 / (item.size ?? itemPerRow)}>
          {item.value}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridContainer;
