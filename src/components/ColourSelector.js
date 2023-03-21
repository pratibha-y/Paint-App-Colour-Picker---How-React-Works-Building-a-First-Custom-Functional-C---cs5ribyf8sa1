import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  // console.log(config, "background", background);
  return (
    <button className={config.classname} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}

export default ColourSelector;
