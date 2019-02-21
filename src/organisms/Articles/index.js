import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

import Context from '../../atoms/Context';
import ArticleCard from '../../molecules/ArticleCard';
import { classes } from 'coa';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',

    padding: `0 ${theme.spacing.unit * 1.5}px`,
    width: '100%',
  },
});

const Articles = ({ classes }) => {
  const { articles } = useContext(Context);

  return (
    <Droppable droppableId="droppable">
      {provided => (
        <div
          className={classes.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {articles.map((article, index) => ((
            <ArticleCard
              article={article}
              className="aricles-row"
              index={index}
              key={article.id}
            />
          )))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default withStyles(styles)(Articles);
