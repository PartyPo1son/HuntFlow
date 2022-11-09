import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../Layout';

export default function jsxRender(pathToFile, initState, cb) {
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  return cb(null, `<!DOCTYPE html>${html}`);
}