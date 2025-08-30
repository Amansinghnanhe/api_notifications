import 'dotenv/config';
import { Umzug, SequelizeStorage } from 'umzug';
import { sequelize } from './db';

const umzug = new Umzug({
    migrations: { glob: 'src/migrations/*.ts' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize, tableName: 'SequelizeMeta' }),
    logger: console,
});

const action = process.argv[2] || 'up';

(async () => {
    await sequelize.authenticate();

    if (action === 'up') {
        const r = await umzug.up();
        console.log('Applied:', r.map(m => m.name));
    } else if (action === 'down') {
        // revert one step by default; pass a number to revert N
        const steps = Number(process.argv[3] || 1);
        const r = await umzug.down({ step: steps });
        console.log('Reverted:', r.map(m => m.name));
    } else if (action === 'status') {
        const executed = await umzug.executed();
        const pending = await umzug.pending();
        console.log('Executed:', executed.map(m => m.name));
        console.log('Pending:', pending.map(m => m.name));
    } else {
        console.log('Use: up | down [steps] | status');
    }

    await sequelize.close();
})().catch(err => {
    console.error(err);
    process.exit(1);
});
