import './App.css';

import {err} from './util';

import React, {
  CSSProperties,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import _ from 'lodash';
import classnames from 'classnames';

const CATEGORIES = [
  'a meow meow',
  'a nobody',
  'a liability',
  'an entity',
  'a construct',
  'an individual',
  'a company',
];

const COUNTRIES = [
  'Germany',
  'the UK',
  'the US',
  'Indonesia',
  'Texas',
  'Ghana',
  'Liechtenstein',
];

export default function App() {
  const categorySelect = (
    <SelectWheel value={'a company'} options={CATEGORIES} reverse />
  );
  const countrySelect = <SelectWheel value={'Germany'} options={COUNTRIES} />;
  return (
    <div className="bg">
      <h1>
        cosmin is a {categorySelect} from {countrySelect}
      </h1>
    </div>
  );
}

interface SelectWheelProps {
  value: string;
  options: string[];
  reverse?: boolean;
}

const SelectWheel: React.FC<SelectWheelProps> = ({value, options, reverse}) => {
  const valueI = options.indexOf(value);
  if (valueI === -1) {
    err(`value ${value} not found in ${options.join(',')}`);
  }

  const wheelStyle = {};

  const optionEls = options.map((o) => {
    const optionStyle = {};
    return (
      <div className="option" style={optionStyle}>
        {o}
      </div>
    );
  });

  return (
    <div className="wheel" style={wheelStyle}>
      <div className="options" style={wheelStyle}>
        {optionEls}
      </div>
    </div>
  );
};
