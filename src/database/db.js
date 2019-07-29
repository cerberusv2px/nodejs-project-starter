import knexJs from 'knex';
import { Model } from 'objection';
import knexConfig from './knexfile';

const knex = knexJs(knexConfig);
Model.knex(knex);

export default Model;
