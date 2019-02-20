import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';

import Context from '../../atoms/Context';
import ArticleCard from '../../molecules/ArticleCard';

const Articles = () => {
  const { articles } = useContext(Context);

  return articles.map(article => ((
    <Grid item xs={12} key={article.id}>
      <ArticleCard
        article={article}
        className="aricles-row"
      />
    </Grid>
  )));
};

export default Articles;
