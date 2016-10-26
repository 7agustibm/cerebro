import React from 'react';
import Loading from 'main/components/Loading';
import Preload from 'main/components/Preload';
import fs from 'fs';
import memoize from 'lodash/memoize';
import { readFile } from 'lib/rpc/functions';

const WithFetchedFile = ({path, options, children}) => {
  const renderer = (source, error) => {
    if (error) return <div>Error fetching file</div>;
    return children(source);
  }
  return (
    <Preload loader={<Loading />} promise={readFile(path, options)}>
      {renderer}
    </Preload>
  );
}

export default memoize(WithFetchedFile);
