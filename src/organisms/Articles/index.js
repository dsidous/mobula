import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Droppable } from 'react-beautiful-dnd';

import Context from '../../atoms/Context';
import ArticleCard from '../../molecules/ArticleCard';

const Articles = () => {
  const { articles } = useContext(Context);

  return (
    <Droppable droppableId="droppable">
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {articles.map((article, index) => ((
            <Grid item xs={12} key={article.id}>
              <ArticleCard
                article={article}
                className="aricles-row"
                index={index}
              />
            </Grid>
          )))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Articles;
