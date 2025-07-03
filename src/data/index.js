// src/data/index.js

import c from './c.json';
import cn from './cn.json';
import css from './css.json';
import datastructure from './datastructure.json';
import dbms from './dbms.json';
import expressjs from './expressjs.json';
import gitgithub from './git&github.json';
import html from './html.json';
import java from './java.json';
import javascript from './javascript.json';
import mongodb from './mongodb.json';
import mysql from './mysql-query-example.json';
import nodejs from './nodejs.json';
import os from './os.json';
import python from './python.json';
import reactjs from './reactjs.json';
import se from './software-engineering.json';
import st from './software-testing.json';

export const subjectMap = {
  'c': c,
  'cn': cn,
  'css': css,
  'datastructure': datastructure,
  'dbms': dbms,
  'expressjs': expressjs,
  'git&github': gitgithub,
  'html': html,
  'java': java,
  'javascript': javascript,
  'mongodb': mongodb,
  'mysql-query-example': mysql,
  'nodejs': nodejs,
  'os': os,
  'python': python,
  'reactjs': reactjs,
  'software-engineering': se,
  'software-testing': st,
};

export const subjects = [
  { name: 'C Programming', file: 'c.json' },
  { name: 'Computer Networks', file: 'cn.json' },
  { name: 'CSS', file: 'css.json' },
  { name: 'Data Structures', file: 'datastructure.json' },
  { name: 'DBMS', file: 'dbms.json' },
  { name: 'Express JS', file: 'expressjs.json' },
  { name: 'Git & GitHub', file: 'git&github.json' },
  { name: 'HTML', file: 'html.json' },
  { name: 'Java', file: 'java.json' },
  { name: 'JavaScript', file: 'javascript.json' },
  { name: 'MongoDB', file: 'mongodb.json' },
  { name: 'MySQL Query Examples', file: 'mysql-query-example.json' },
  { name: 'Node JS', file: 'nodejs.json' },
  { name: 'Operating Systems', file: 'os.json' },
  { name: 'Python', file: 'python.json' },
  { name: 'React JS', file: 'reactjs.json' },
  { name: 'Software Engineering', file: 'software-engineering.json' },
  { name: 'Software Testing', file: 'software-testing.json' },
];
