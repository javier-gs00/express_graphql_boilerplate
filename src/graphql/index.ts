import * as graphql from 'graphql'
import { query } from './queries'

const { GraphQLSchema } = graphql

export const schema = new GraphQLSchema({
	query,
})
