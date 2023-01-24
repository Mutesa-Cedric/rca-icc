// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import player from './documents/player';
import team from './documents/team';
import matchDay from './documents/matchDay';
import match from './documents/match';
import coach from './documents/coach';


// objects
import matchStats from './objects/matchStats';
import matchTeamStats from './objects/matchTeamStats';
import overallTeamStats from './objects/overallTeamStats';
import lineup from './objects/lineup';
import event from './objects/event';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        player,
        team,
        match,
        matchDay,
        coach,
        matchStats,
        overallTeamStats,
        matchTeamStats,
        lineup,
        event
    ])
})
